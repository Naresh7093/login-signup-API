import "dotenv/config";
import express from "express";
import { db } from "./db/db.js";
const app = express();
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 3000;

app.get("/", () => {});
app.use("/api/user", userRoute);
db()
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`Server is running at ${PORT}...`);
    });
  })
  .catch((error) => {
    console.log(`Error while connecting database:${error}`);
  });
