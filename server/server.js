/* ----- Default Imports ----- */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

/* ----- Boilerplate ----- */
dotenv.config();
const PORT = 8888;
const app = express();
app.use(cors());
app.use(express.json());
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });
const ERROR_STRING = "Database Error";

/* ----- Endpoints ----- */
app.get("/", (request, response) => {
  response.json("Your server is online!");
});

app.get("/test", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM test");
    res.json(result.rows);
  }
  catch(err) {
    res.status(500).json(ERROR_STRING);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const result = await db.query("SELECT posts.id, posts.title FROM posts");
    res.json(result.rows);
  }
  catch(err) {
    res.status(500).json(ERROR_STRING);
  }
});

app.get("/singlepost/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query("SELECT posts.id, posts.title, posts.content, posts.likes, categories.name AS category FROM posts JOIN categories ON posts.category_id = categories.id WHERE posts.id=$1", [id]);
    res.json(result.rows[0]);
  }
  catch(err) {
    res.status(500).json(ERROR_STRING);
  }
});

app.get("/categories", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM categories");
    res.json(result.rows);
  }
  catch(err) {
    res.status(500).json(ERROR_STRING);
  }
});

app.get("/posts/category/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const result = await db.query("SELECT posts.id, posts.title, posts.content, posts.likes, categories.name AS category FROM posts JOIN categories ON posts.category_id = categories.id WHERE categories.name=$1", [name]);
    res.json(result.rows);
  }
  catch(err) {
    res.status(500).json(ERROR_STRING);
  }
});

app.post("/delete", async (req, res) => {
  try {
    const id = Number(req.body.id);
    const protectedResult = await db.query("SELECT posts.deleteblocked FROM posts WHERE id=$1", [id]);
    const protectedPost = protectedResult.rows[0].deleteblocked; 
    if(!protectedPost) {
      const deleteMsg = await db.query("DELETE FROM posts WHERE id=$1", [id]);
      res.status(200).json("success");
    }
    else res.status(200).json("Post is Protected");
  }
  catch(err) {
    res.status(500).json(ERROR_STRING);
  }
});

app.post("/newpost", async (req, res) => {
  try {
    const addPost = await db.query("INSERT INTO posts (title, content, category_id) VALUES ($1, $2, $3) RETURNING *", [req.body.title, req.body.content, req.body.category_id]);
    res.status(200).json(addPost.rows[0]);
  }
  catch(err) {
    res.status(500).json(ERROR_STRING);
  }
});

/* ----- LISTEN LISTEN LISTE ----- */
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));

