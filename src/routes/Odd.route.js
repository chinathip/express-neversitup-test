import express from "express";
import { genOdd } from "../controllers/OddController.js";

const router = express.Router();

router.post("/getOdd", genOdd);

export default router;
