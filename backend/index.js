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

app.get("/api/userTests/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await client.query(
    `SELECT * FROM tests WHERE user_id = ${id};`
  );
  res.send(id);
});

app.post("/api/post", (req, res) => {
  const body = req.body;

  console.log(body);

  res.send();
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
