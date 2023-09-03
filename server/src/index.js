import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { scoreRouter } from "./routes/score.js";
import dotenv from "dotenv";
const PORT = process.env.PORT || 3001;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/result", scoreRouter);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@puzzles.kqxccjs.mongodb.net/puzzles?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => console.log("Server started"));