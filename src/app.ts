import Express from "express";
import cors from "cors";
import config from "./config";
import apiRouter from "./routes";
import * as path from "path";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

export const app = Express();
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "swagger.json"), "utf-8")
);
swaggerDocument.host = process.env.HOST;
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(Express.json());

app.use("/*", apiRouter)

app.get("/", (req, res) => {
  res.send(
    'hello there, see the documentation here: <a href="" target="__blank">Link</a>'
  );
});
export default app;
