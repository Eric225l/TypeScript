import express, {} from "express";
let server = express();
let port = 3000;
server.get("/", (req, res) => {
    res.send("Servidor");
});
server.listen(port, () => {
    console.log("servidor abriu");
});
//# sourceMappingURL=server.js.map