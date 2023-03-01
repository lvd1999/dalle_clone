import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config(); // Load environment variables from .env file, where API keys and passwords are configured

const app = express(); // Create Express server
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

app.use("/api/v1/post", postRoutes); // POST routes
app.use("/api/v1/dalle", dalleRoutes); // DALL-E routes

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
}); // GET / route

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
