import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config(); // Load environment variables from .env file, where API keys and passwords are configured

const router = express.Router();
