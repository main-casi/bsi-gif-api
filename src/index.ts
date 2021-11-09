import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./config";
import { Gif } from "./gif/gif.model";
import { GiphyParams } from "./giphy/models/GiphyParams";
import { GiphyService } from "./giphy/services/giphy.service";

const api = express();

function start(porta: number) {
  console.log(`API inicializada na porta ${porta} 🚀`);
}

api.use(express.json());

function getGifs(params: any): Promise<Gif[]> {
  let q = "error";
  let limit = 2;
  let offset = 0;

  if (params.q) {
    q = String(params.q);
  }

  if (params.limit) {
    limit = Number(params.limit);
  }

  if (params.offset) {
    offset = Number(params.offset);
  }

  const data: GiphyParams = {
    q,
    limit,
    offset,
  };

  const response = GiphyService.get(data).then((data) => {
    const response: Gif[] = data.map((item) => ({
      id: item.id,
      title: item.title,
      images: {
        original: item.images.original.url,
        preview: item.images.preview_gif.url,
        compact: item.images.downsized_large.url,
        static: item.images["480w_still"]?.url,
      },
    }));
    return response;
  });
  return response;
}

api.get("/search", (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.q) {
    next();
  }
  getGifs(req.query).then((data) => {
    res.json(data);
  });
});

api.get("/search", (req: Request, res: Response, next) => {
  if (!req.body.q) {
    next();
  }
  getGifs(req.body).then((data) => {
    res.json(data);
  });
});

api.get("/search", (req: Request, res: Response, next) => {
  res.status(400).json({
    error: "O parâmetro da busca não pode ser vazio.",
    status: 400,
  });  
});

api.listen(PORT, () => start(PORT));

export default api;
