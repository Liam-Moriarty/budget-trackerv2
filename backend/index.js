const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const { readdirSync } = require("fs");
require("dotenv").config();

const app = express();

// middlewares

app.use(cors({}));
app.use(express.json());

// routes

readdirSync("./routes").map((route) =>
  app.use("/api/v1/", require("./routes/" + route))
);

// database connection

const PORT = process.env.PORT;

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
};

server();
