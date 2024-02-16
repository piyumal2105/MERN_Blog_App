import express from "express";
import "dotenv/config";
import dbConnect from "./configs/dbConfig.js";
import UserRoutes from "./routes/user.routes.js";
import AuthRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6001;

//User Routes
app.use("/api/user", UserRoutes);
//Auth Routes
app.use("/api/auth", AuthRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Intrernal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.use((req, res, next) => {
  console.log(`${req.method} =====> URL: ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`🚀💀 Server is started on port ${PORT}!`);
  dbConnect();
});
