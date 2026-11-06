import express, {} from "express";
import cors from "cors";
let server = express();
let port = 3000;
server.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
server.use(express.json());
server.get("/", (req, res) => {
    res.json({ message: "Sem dados" });
});
server.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "dados enviados" });
});
server.listen(port, () => {
    console.log("servidor abriu");
});
//# sourceMappingURL=servidor.js.map