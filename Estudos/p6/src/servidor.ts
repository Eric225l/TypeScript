import express, { type Request, type Response } from "express";
import cors from "cors";

let server = express();
let port: number = 3000;

server.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

server.use(express.json());

server.get("/", (req: Request, res: Response) => {
    res.json({message: "Sem dados"});
})

server.post("/", (req: Request, res: Response)=>{
    console.log(req.body);
    res.json({message: "dados enviados"});
})

server.listen(port, ()=>{
    console.log("servidor abriu");
})