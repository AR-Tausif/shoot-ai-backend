import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// routing setup
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello fron image generator");
});

const startServer = async () => {
  app.listen(3500, () => console.log("server has start"));
};
startServer();

/**
 * 
 * const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const openaiRoutes = require("./routes/openaiRoutes");

dotenv.config();
const app = express();
//use middleware for this application
app.use(cors());
app.use("/openai", openaiRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3500, () => console.log("Server started 3500"));

 */
