const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { Client } = require("pg");
const app = express();

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

port = 3000;

app.get("/api/users", async (req, res) => {
  const { rows } = await client.query("SELECT * FROM users;");
  res.send(rows);
});

app.get("/api/userTests/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await client.query(
    `SELECT * FROM tests WHERE user_id = ${id};`
  );
  res.send(rows);
});

// Lägga till nya användarkonton
app.post("/api/users", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Fyll i både användarnamn och lösenord" });
  }

  const { rows } = await client.query(
    `SELECT * FROM users where username = $1`,
    [username]
  );
  if (rows.length > 0) {
    return res.status(409).json({ message: "Användarnamn finns redan" });
  }
  try {
    await client.query(
      `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password]
    );
    res.status(201).json({ message: "Användare skapad!" });
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Något gick fel" });
  }
});

app.put("api/update/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);

  res.send();
});

app.delete("api/delete/:id", (req, res) => {
  const { id } = req.params;
});

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log(`Redo på port http://localhost:${port}/`);
});
