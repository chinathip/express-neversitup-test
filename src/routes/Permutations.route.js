import express from "express";
import { genPermutations } from "../controllers/PermutationsController.js";

const router = express.Router();

router.post("/getPermutations", genPermutations);

export default router;
