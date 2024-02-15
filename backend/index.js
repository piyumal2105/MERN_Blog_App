import express from "express";
import "dotenv/config";
import dbConnect from "./configs/dbConfig.js";

const app = express();

const PORT = process.env.PORT || 6001;

app.use((req, res, next) => {
  console.log(`${req.method} =====> URL: ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`🚀💀 Server is started on port ${PORT}!`);
  dbConnect();
});
