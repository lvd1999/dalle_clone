import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

import Post from "../mongodb/models/post.js";

dotenv.config(); // Load environment variables from .env file, where API keys and passwords are configured

const router = express.Router();
