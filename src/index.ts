import express from "express";
import { PORT } from "./config";
import { Routes } from "./routes";

const api = express();

function start(porta: number) {
  console.log(`API inicializada na porta ${porta} 🚀`);
}

api.use(express.json());

Routes(api);

api.listen(PORT, () => start(PORT));

export default api;
