import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";

function TestResultsList() {
  const { user } = useContext(UserContext);
  const { data, isPending, error } = useQuery({
    queryKey: ["testResults"],
    queryFn: () =>
      fetch(`/api/testResults/${user.id}`).then((result) => result.json()),
  });

  return (
    <>
      {isPending && (
        <CircularProgress color="contrast" thickness={7} size={75} />
      )}
      {error && <span>Något gick fel med att hämta datan.</span>}

      {data.map((result) => (
        <List key={result.id} sx={{ borderBottom: "1px solid black" }}>
          <ListItem>
            <ListItemText primary="Test id" secondary={result.result} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Resultat:" secondary={result.result} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Datum:" secondary={result.created_at} />
          </ListItem>
        </List>
      ))}
    </>
  );
}

export default TestResultsList;
