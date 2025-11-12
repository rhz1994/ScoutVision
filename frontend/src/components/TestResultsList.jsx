import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Card, CardContent, CardHeader, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";

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
        <>
          <p>Laddar tidigare gjorda tester</p>
          <CircularProgress color="contrast" thickness={7} size={75} />
        </>
      )}
      {error && <span>Något gick fel med att hämta datan.</span>}

      {data && data.length > 0 && (
        <Card sx={{ mb: 4 }}>
          <CardContent
            sx={{
              gap: 3,
              display: "flex",
              flexDirection: "column",
              padding: 4,
            }}
          >
            <CardHeader title="Tidigare gjorda test" />
            {data.map((result) => (
              <List
                key={result.id}
                sx={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="Resultat:"
                    secondary={`${result.result} av 15`}
                  />
                  {result.result < 6 ? (
                    <SafetyCheckIcon sx={{ color: "green" }} />
                  ) : (
                    <SafetyCheckIcon
                      sx={{ color: result.result > 10 ? "red" : "gold" }}
                    />
                  )}
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Datum:"
                    secondary={`${result.created_at.split("T")[0]} ${
                      parseInt(
                        result.created_at.split("T")[1].substring(0, 2)
                      ) + 1
                    }:${result.created_at.split("T")[1].substring(3, 8)}
                    `}
                  />
                </ListItem>
              </List>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default TestResultsList;
