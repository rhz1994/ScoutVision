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

app.get("/api/testQuestions", async (req, res) => {
  const { rows } = await client.query("SELECT * FROM testQuestions;");
  res.send(rows);
});

app.get("/api/testQuestions2", async (req, res) => {
  const { rows } = await client.query("SELECT * FROM testQuestions2");
  res.send(rows);
});

app.get("/api/testResults/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await client.query(
    `SELECT * FROM testResults WHERE user_id = ${id};`
  );
  res.send(rows);
});

app.post("/api/post/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const { question, answers } = req.body;
  const { id } = req.params;

  const { rows } = await client.query(
    `INSERT INTO answers (user_id, question, answers) VALUES ($1, $2, $3) RETURNING *`,
    [id, question, answers]
  );

  res.send(rows);
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
