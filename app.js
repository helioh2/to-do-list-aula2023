
const express = require("express"); //importando express
const ejs = require("ejs");
const path = require("path");

const mongoose = require("mongoose");

const Tarefa = require("./models/Tarefa")

const app = express(); //instanciando a aplicação express
const port = 3000;

app.set("view engine", "ejs"); // configurando express com ejs
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())
app.use(express.json())


const conectarAoBd = () => {
    mongoose
        .connect(
            "mongodb+srv://root:root@todolist2023.wz6huvy.mongodb.net/?retryWrites=true&w=majority", // setar por variável de ambiente mais tarde
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log("MongoDB Atlas CONECTADO!"))
        .catch((err) => console.log(err)); 
}

conectarAoBd()


app.get("/", async (req, res) => {
  
    // let tarefas = [tarefa1, tarefa2] 
    let tarefas = await Tarefa.find();
    console.log(tarefas);

    res.render("index", {tarefas})
})

app.post("/add", async (req, res) => {

    let textoTarefa = req.body.tarefa // pegando o parametro que veio na requisição

    let tarefa = {
        texto: textoTarefa,
    }  // criou o novo objeto tarefa

    // INSERE NO BANCO DO MONGO
    await Tarefa.create(tarefa);

    res.redirect("/")
})


app.get("/login", (req, res) => {
    res.send("TELA DE LOGIN");
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});  // colocando o servidor para rodar

