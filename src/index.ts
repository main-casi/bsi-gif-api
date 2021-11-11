import cors from "cors";
import express from "express";
import { PORT } from "./config";
import { Routes } from "./routes";

const api = express();

function start(port: number) {
  console.log(`API inicializada na porta ${port} 🚀`);
}

api.use(cors());

api.use(express.json());

Routes(api);

api.listen(PORT, () => start(PORT));

export default api;
