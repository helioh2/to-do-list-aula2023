
const express = require("express"); //importando express
const ejs = require("ejs");
const path = require("path");


const app = express(); //instanciando a aplicação express
const port = 3000;

app.set("view engine", "ejs"); // configurando express com ejs
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/login", (req, res) => {
    res.send("TELA DE LOGIN");
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});  // colocando o servidor para rodar

