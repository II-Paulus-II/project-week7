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
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

/* ----- Endpoints ----- */
app.get("/", (request, response) => {
  response.json("Your server is online!");
});

/* ----- LISTEN LISTEN LISTE ----- */
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));

