import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file, where API keys and passwords are configured

const app = express(); // Create Express server
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
}); // GET / route

const startServer = async () => {
  app.listen(8080, () =>
    console.log("server has started on port http://localhost:8080")
  );
};

startServer();
