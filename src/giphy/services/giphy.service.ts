import axios from "axios";
import { GIPHY_KEY, GIPHY_URL } from '../../config';
import { GiphyDto } from '../models/GiphyDto';
import { GiphyParams } from "../models/GiphyParams";

export class GiphyService {
  private static key = GIPHY_KEY;
  private static url = GIPHY_URL;

  static get(params: GiphyParams): Promise<GiphyDto[]> {
    return new Promise<GiphyDto[]>((resolve, reject) => {
      console.log(params);
      let paramsString = "";
      if (params.q) {
        paramsString += `&q=${params.q}`;
      }
      if (params.limit) {
        paramsString += `&limit=${params.limit}`;
      }
      if (params.offset) {
        paramsString += `&offset=${params.offset}`;
      }

      axios
        .get(`${this.url}?api_key=${this.key + paramsString}`)
        .then((response: any) => {
          const data: GiphyDto[] = response.data.data;
          resolve(data);
        })
        .catch((error: any) => {
          console.log(error);
          reject();
        });    
    });
  }
}
