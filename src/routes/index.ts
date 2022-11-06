import { Router } from "express";
import { Request, Response } from "express";
import { ce } from "~/lib/captureError";
import axios, { AxiosResponse } from "axios";
import * as path from "path";
import * as fse from "fs-extra";
import fs from "fs";
export const router = Router();
const swaggerDocument = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "swagger.json"), "utf-8")
);
const getResponseFromServer = async (req: Request, res: Response) => {
    const endpoint = req.originalUrl;
    const fullPath = req.protocol + "://localhost:5000" + endpoint;
    const response = (await axios.get(fullPath)).data;
    const properties = {};
    for (const property in response) {
      const obj = {};
      console.log(property)
      obj["type"] = typeof response[property];
      properties[property] = obj;
    }
    console.log(properties)
    const swaggerPath = swaggerDocument.paths;
    swaggerPath[endpoint] = {
        get: {
            produces: ["application/json"],
            responses: {
                "200": {
                    description: "successfull operation",
                    schema: {
                        type: typeof response,
                        properties: properties,
                    },
                },
            },
        },
    };
    swaggerDocument["paths"] = swaggerPath;
    const swaggerJsonPath = path.join(process.cwd(), "swagger.json");
    fse.outputFileSync(swaggerJsonPath, JSON.stringify(swaggerDocument));

    return res.send(response);
};
const postResponseFromServer = async (req: Request, res: Response) => {
    const endpoint = req.originalUrl;
    const fullPath = req.protocol + "://localhost:5000" + endpoint;
    const options = {
        url: fullPath,
        method: "POST",
        data: req.body,
    };
    const response = (await axios(options)).data;
    const properties = {}, requestProperties={};
    for (const property in response) {
        const obj = {};
        obj["type"] = typeof response[property];
        properties[property] = obj;
    }
    for(const property in req.body)
    {
      const obj={};
      obj["type"] = typeof req.body[property]
      requestProperties[property] =obj
    }
    const swaggerPath = {};
    swaggerPath[endpoint] = {
        post: {
            produces: ["application/json"],
            parameters: [
                {
                    in: "body",
                    name: "body",
                    description: "Template object",
                    required: true,
                    schema: {
                        type: typeof response,
                        properties:requestProperties,
                    },
                },
            ],
            responses: {
                "200": {
                    description: "successfull operation",
                    schema: {
                        type: typeof response,
                        properties: properties,
                    },
                },
            },
        },
    };
    swaggerDocument["paths"] = swaggerPath;
    const swaggerJsonPath = path.join(process.cwd(), "swagger.json");
    fse.outputFileSync(swaggerJsonPath, JSON.stringify(swaggerDocument));

    return res.send(response);
};
const patchResponseFromServer = async (req: Request, res: Response) => {
    const endpoint = req.originalUrl;
    const fullPath = req.protocol + "://localhost:5000" + endpoint;
    const options = {
        url: fullPath,
        method: "PATCH",
        data: req.body,
    };
    const response = (await axios(options)).data;
    return res.send(response);
};
const deleteResponseFromServer = async (req: Request, res: Response) => {
    const endpoint = req.originalUrl;
    const fullPath = req.protocol + "://localhost:5000" + endpoint;
    const response = (await axios.delete(fullPath)).data;
    return res.send(response);
};
router.delete("*", ce(deleteResponseFromServer));
router.patch("*", ce(patchResponseFromServer));
router.get("*", ce(getResponseFromServer));
router.post("*", ce(postResponseFromServer));

export default router;
