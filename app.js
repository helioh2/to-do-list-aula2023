
const express = require("express"); //importando express
const ejs = require("ejs");
const path = require("path");


const app = express(); //instanciando a aplicação express
const port = 3000;

app.set("view engine", "ejs"); // configurando express com ejs
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    let soma = 2 + 2;

    // exemplos de tarefas hardcoded (chapado no código)
    let tarefas = [
        {
            id: 1,
            texto: "Lavar louça",
            dataCriacao: new Date(),
            dataFinal: null,
            feito: false,
        },
        {
            id: 2,
            texto: "Fazer trabalho",
            dataCriacao: new Date("2023-04-23"),
            dataFinal: new Date(),
            feito: true,
        }
    ] // faz de conta que é a lista de tarefas do banco
    
    // let tarefas = [tarefa1, tarefa2] 

    res.render("index", {soma, tarefas})
})

app.get("/login", (req, res) => {
    res.send("TELA DE LOGIN");
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});  // colocando o servidor para rodar

