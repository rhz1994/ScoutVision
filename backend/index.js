const express = require("express");
// const path = require("path");
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

const port = process.env.PORT || 3000;

app.get("/api/users", async (req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM users;");
    res.send(rows);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/testQuestion", async (req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM testQuestion;");
    res.send(rows);
  } catch (err) {
    console.log(err);
  }
});

// app.get("/api/testResults/:id", async (req, res) => {
//   const { id } = req.params;
//   const { rows } = await client.query(
//     `SELECT * FROM testResults WHERE user_id = ${id};`
//   );
//   res.send(rows);
// });

// app.post("/api/users", async (req, res) => {
//   const { username, password } = req.body;

//   const createUser = async (username, password) => {
//     const checkSql = "SELECT * FROM users WHERE username = $1";
//     const insertSql = `
//       INSERT INTO users (username, password)
//       VALUES ($1, $2)
//       RETURNING *;
//     `;

//     try {
//       const checkResult = await client.query(checkSql, [username]);
//       if (checkResult.rows.length > 0) {
//         throw new Error("Det finns redan ett konto med samma användarnamn");
//       }

//       const insertResult = await client.query(insertSql, [username, password]);
//       return insertResult.rows[0];
//     } catch (err) {
//       throw err;
//     }
//   };

//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ message: "Fyll i både användarnamn och lösenord" });
//   }

//   try {
//     const newUser = await createUser(username, password);
//     res.status(201).json({ message: "Användare skapad!", data: newUser });
//   } catch (error) {
//     console.error(error);
//     if (error.message.includes("konton")) {
//       return res.status(409).json({ message: error.message });
//     }
//     res.status(500).json({ message: "Något gick fel" });
//   }
// });

// app.post("/api/testResult/:id", async (req, res) => {
//   console.log(req.body);
//   console.log(req.params);
//   const { result } = req.body;
//   const { id } = req.params;

//   const { rows } = await client.query(
//     `INSERT INTO testResults (user_id, result) VALUES ($1, $2) RETURNING *`,
//     [id, result]
//   );

//   res.send(rows);
// });

// app.put("/api/update/:id", async (req, res) => {
//   const { id } = req.params;
//   const { username, password } = req.body;

//   const updateUser = async (username, password, id) => {
//     let sql = `
//       UPDATE users
//       SET username = $1, password = $2
//       WHERE id = $3
//       RETURNING id, username;
//     `;
//     let params = [username, password, id];

//     try {
//       const result = await client.query(sql, params);
//       if (result.rows.length === 0) {
//         throw new Error(!"Användare hittades ej");
//       }
//       return result.rows[0];
//     } catch (err) {
//       throw err;
//     }
//   };

//   try {
//     const updatedUser = await updateUser(username, password, id);
//     res
//       .status(200)
//       .json({ message: "Användare uppdateras", data: updatedUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/api/users/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const { rows } = await client.query(
//       `DELETE FROM users WHERE id = $1 RETURNING id, username`,
//       [id]
//     );

//     if (rows.length === 0) {
//       return res.status(404).json({ message: "Användare hittades inte" });
//     }

//     res.status(200).json({
//       message: "Användare raderad",
//       data: rows[0],
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Något gick fel vid borttagning" });
//   }
// });

// app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log(`Redo på port http://localhost:${port}/`);
});
