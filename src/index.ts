import "reflect-metadata";
import express from "express";
import "express-async-errors";

import { errorTratament } from "./middlewares/errorTratament";
import { router } from "./routes";

import "./database";

const app = express();
app.use(express.json());

app.use(router);

app.use(errorTratament);

app.listen(process.env.PORT || 3333, () => {
  console.log("Back-end started! 🚀🚀");
});
