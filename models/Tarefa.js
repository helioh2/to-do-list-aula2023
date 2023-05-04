
const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now()
    },
    feito: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Tarefa", tarefaSchema);