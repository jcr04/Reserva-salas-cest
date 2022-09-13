'use strict'

const mongoose = require('mongoose');
const Reserva = mongoose.model('Reserva');

exports.get = (req, res, next) => {
    Reserva.find({})
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};


exports.getbyName = (req, res, next) => {
    Reserva.find({
        nome: new RegExp(req.params.nome)
    }).distinct('nome')
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getbyNameSala = (req, res, next) => {
    Reserva.find({
        nome: new RegExp(req.params.nome)
    }).then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};


exports.getbyId = (req, res, next) => {
    Reserva.findById(
        req.params.id
    )
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};



exports.post = (req, res, next) => {
    var reserva = new Reserva(req.body);

    reserva
        .save()
        .then(x => {
            res.status(201).send({
                message: 'cadastrado'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'falha',
                data: e
            });
        });

};




exports.delete = (req, res, next) => {
    Reserva.findOneAndRemove(
        req.body.id
    )
        .then(data => {
            res.status(201).send({
                message: 'Produto removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover produto',
                data: e
            });
        });
   
};