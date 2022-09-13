'use strict'
const db = require('');

//escolha seu banco de dados
const recursoSchema = new db.Schema({

    patrimonio: {
        type: Number,
        trim: true,
        required: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    modelo: {
        type: String,
        trim: true
    },
    quantidade: {
        type: Number,
        trim: true,
        required: true,
    },
    desc: {
        type: String,
        trim: true
    }
    

});

module.exports = mongoose.model('Recurso', recursoSchema);
