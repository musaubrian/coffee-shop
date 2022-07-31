// import http from "http"
import express from "express";
import cors from "cors";
import products from "../data/db.json" assert { type: "json" };
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.get("/api/v1/products", (req, res) => {
  res.status(200).json(products);
});

app.post("/api/v1/users", (req, res) => {
  const user = req.body;
  res.status(201).send(user);
});

// const app = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/plain" })
//         res.end("Hello World")
//     }
//     if (req.url === "/api/users") {
//         res.writeHead(200, { "Content-Type": "application/json" })
//         res.end(JSON.stringify([{ name: "John" }, { name: "Jane" }]))
//     }
// })

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
