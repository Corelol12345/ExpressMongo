import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "Diario de um Banana"
    },
    {
        id:2,
        titulo: "Casa Monstro"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;