import express, {type Request, type Response } from "express";

let server = express();
let port: number = 3000;

server.get("/", (req: Request, res: Response)=>{
    res.send("Servidor");
})

server.listen(port, ()=>{
    console.log("servidor abriu");
})