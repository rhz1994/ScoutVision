import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function TestResultsList({ testResults }) {
  const results = testResults || [];

  if (results.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        Inga sparade resultat
      </Typography>
    );
  }

  return (
    <List>
      {testResults.map((result) => (
        <ListItem key={result.id}>
          <ListItemText
            primary={result.testName || `Test ${result.id}`}
            secondary={
              <>
                <strong>Resultat:</strong> {result.result}
                <strong>Datum:</strong> {result.created_at}
                {result.suspect_details && (
                  <strong>Telefonnummer: {result.suspect_details}</strong>
                )}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TestResultsList;
