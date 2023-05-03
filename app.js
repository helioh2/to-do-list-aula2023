
const express = require("express"); //importando express
const ejs = require("ejs");
const path = require("path");


const app = express(); //instanciando a aplicação express
const port = 3000;

app.set("view engine", "ejs"); // configurando express com ejs
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())
app.use(express.json())

// exemplos de tarefas hardcoded (chapado no código)
let bd = [] // faz de conta que é a lista de tarefas do banco


app.get("/", (req, res) => {
  
    // let tarefas = [tarefa1, tarefa2] 
    let tarefas = bd;

    res.render("index", {tarefas})
})

app.post("/add", (req, res) => {

    let textoTarefa = req.body.tarefa // pegando o parametro que veio na requisição

    let id;
    if (bd.length == 0) {
        id = 1;
    } else {
        let ultimaTarefaInserida = bd.at(-1)
        let ultimoId = ultimaTarefaInserida.id
        id = ultimoId + 1
    }

    let tarefa = {
        id: id,
        texto: textoTarefa,
        dataCriacao: new Date(),
        feito: false
    }  // criou o novo objeto tarefa

    bd.push(tarefa); //adiciona a tarefa no BD

    res.redirect("/")
})


app.get("/login", (req, res) => {
    res.send("TELA DE LOGIN");
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});  // colocando o servidor para rodar

