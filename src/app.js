import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//Basic Configuartions
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORiGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    method: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

// import the routes after the configuration of Everything Above.

import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.route.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
          }

          h1 {
            color: #ff4500;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1>APP IS RUNNING</h1>
      </body>
    </html>
  `);
});

export default app;
