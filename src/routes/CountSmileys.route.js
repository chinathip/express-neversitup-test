import express from "express";
import { genCountSmile } from "../controllers/CountSmileysController.js";

const router = express.Router();

router.post("/getCountSmile", genCountSmile);

export default router;
