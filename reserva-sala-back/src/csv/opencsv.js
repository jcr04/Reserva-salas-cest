'use strict'
var fs = require('fs');
var csv = require('fast-csv');
const db = require('db');
db.connect('conecte seu db');


const reserva = new db.Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        trim: true
    },
    capacidade: {
        type: Number
    },
    horario: {
        type: String,
        trim: true
    },
    codigoDisciplina: {
        type: String,
        trim: true
    },
    codigoTurma: {
        type: String,
        trim: true
    },
    nomeDisciplina: {
        type: String,
        trim: true
    },
    nomeProfessor: {
        type: String,
        trim: true
    }
   
});

var Reserva = db.model('Reserva', reserva);


const stream = fs.createReadStream('horarios.csv');
const streamCsv = csv({
    delimiter: ';'
})
    .on('data', function(data) {
        var reserva = new Reserva({
        
            nome: data[0],
            tipo: data[1],
            capacidade: data[2],
            horario: data[3],
            codigoDisciplina: data[4],
            codigoTurma: data[5],
            nomeDisciplina: data[6],
            nomeProfessor: data[7]


        })
    
        reserva.
        save()
        .then({            
                message: 'cadastrado'
            
        }).catch({
            
                message: 'falha'
                
            
        });
            
        


    });

stream.pipe(streamCsv);




