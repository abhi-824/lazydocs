import { config as dotenvconfig } from "dotenv";

dotenvconfig();

export const config = {
  PORT: process.env.PORT || 3001,
  SERVER_PORT:process.env.PORT || 5000
};

export default config;
