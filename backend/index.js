import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { URLRouter } from "./src/routes/URL.route.js";
import { connectDB } from "./src/App.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

await connectDB();
app.use(express.json());
app.use(cors());

app.use("/", URLRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
