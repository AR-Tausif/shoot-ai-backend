const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/generate", async (req, res) => {
  const text = req.body.text;
  // const client = new OpenAI.API(process.env.OPENAI_API_KEY);
  const client = await OpenAI.create(process.env.OPENAI_API_KEY);
  const response = await client.createImage(text);

  res.json(response);
});

app.listen(3500, () => console.log("Server started 3000"));
