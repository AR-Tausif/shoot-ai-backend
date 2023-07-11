import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
// const { generateImage } = require("../controllers/openaiController");

dotenv.config();

// router.post("generateimage", (req, res) => {
//   res.status(200).json({
//     success: true,
//   });
// });

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("hello fron dalle");
});

router.route("/").post(async (req, res) => {
  try {
    // const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt: "dog eating juice in america cigaco city",
      n: 1,
      size: "512x512",
    });
    // b64_json
    const image = aiResponse.data.data[0];
    res.status(200).json({
      success: true,
      data: image,
    });
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    // res.status(500).send(error?.response.data.error.message);
    res.status(400).json({
      success: false,
      error: "the image could not be generated",
    });
  }
});
export default router;
