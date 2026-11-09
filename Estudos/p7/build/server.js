import "dotenv/config";
import cors from "cors";
import express, {} from "express";
import * as database from "./connectDatabase.js";
let port = Number(process.env.PORT) || 3000;
let server = express();
server.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
server.use(express.json());
server.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "dados enviados" });
});
server.listen(port, () => {
    console.log("Servidor aberto");
});
//# sourceMappingURL=server.js.map