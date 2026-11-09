import "dotenv/config";
import cors from "cors";
import express, { type Request, type Response } from "express";
import * as database from "./connectDatabase";

let port: number = Number(process.env.PORT) || 3000;
let server = express();

server.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204
}))
server.use(express.json());

server.post("/", (req: Request, res: Response )=>{
    console.log(req.body);
    res.json({message : "dados enviados"});
})

server.listen(port, ()=>{
    console.log("Servidor aberto");
})