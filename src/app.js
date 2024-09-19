import express from "express";
const app = express();
import routes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());
app.use(`${process.env.service}/`, routes);

app.listen(process.env.port, () => {
  console.log(`Example app listening at http://localhost:${process.env.port}`);
});
