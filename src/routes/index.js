import express from "express";
import permutationsRoute from "./Permutations.route.js";
import oddRoute from "./Odd.route.js";
import countSmileysRoute from "./CountSmileys.route.js";
const router = express.Router();

router.use("/permutations", permutationsRoute);
router.use("/odd", oddRoute);
router.use("/countSmileys", countSmileysRoute);

export default router;
