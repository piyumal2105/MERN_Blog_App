import express from "express";
import "dotenv/config";
import dbConnect from "./configs/dbConfig.js";
import UserRoutes from "./routes/user.routes.js";

const app = express();

const PORT = process.env.PORT || 6001;

//User Routes
app.use("/user", UserRoutes);

app.use((req, res, next) => {
  console.log(`${req.method} =====> URL: ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`🚀💀 Server is started on port ${PORT}!`);
  dbConnect();
});
