import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

function Wall() {
  const { posts, setPosts } = useState();

  useEffect(() => {
    fetch("/api/wall/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <Box sx={{ border: "solid 1px black" }}>
      {posts && posts.length > 0 && (
        <Card sx={{ mb: 4 }}>
          <CardContent
            sx={{ gap: 3, display: "flex", flexDirection: "column" }}
          >
            {posts.map((post) => (
              <List key={post.id} sx={{ borderBottom: "1px solid black" }}>
                <ListItem>
                  <ListItemText primary="Test id" secondary={post.result} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Resultat:" secondary={post.result} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Datum:" secondary={post.created_at} />
                </ListItem>
              </List>
            ))}
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default Wall;
