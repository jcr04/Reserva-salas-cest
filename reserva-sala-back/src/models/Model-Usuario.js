'use strict'
const db = require('');

//escolha seu banco de dados
const usuarioSchema = new db.Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true
    },
    senha1: {
        type: String,
        required: true
    },
    senha2: {
        type: String,
        required: true
    }
   
});
 
module.exports = mongoose.model('Usuario', usuarioSchema);
