import express from "express";
import "dotenv/config";
import dbConnect from "./configs/dbConfig.js";
import UserRoutes from "./routes/user.routes.js";
import AuthRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6001;

//User Routes
app.use("/user", UserRoutes);
//Auth Routes
app.use("/auth", AuthRoutes);

app.use((req, res, next) => {
  console.log(`${req.method} =====> URL: ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`🚀💀 Server is started on port ${PORT}!`);
  dbConnect();
});
