import { config } from "dotenv";
config();

export const PORT: number =  Number(process.env.PORT) || 3000;

export const GIPHY_KEY: string = String(process.env.GIPHY_KEY);
export const GIPHY_URL: string = String(process.env.GIPHY_URL);

const ENV = {
  PORT, GIPHY_KEY, GIPHY_URL
}

export default ENV;