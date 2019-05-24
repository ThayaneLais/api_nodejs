var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/otimizacao');

var connection = mongoose.connection;

connection.on('error', console.error);


var MedSchema = new mongoose.Schema({
    principio_ativo: String,
    cnpj: String,
    laboratorio: String,
    produto: String,
    apresentacao: String,
    classe_terapeutica: String,
    tipo_produto: String,
    regime_preco: String,
    pf_sem_imposto: String,
    restricao_hospitalar: String,
    comercializacao_2018: String,
    tarja: String
}, { collection: 'medicamentos'})

module.exports = { Mongoose: mongoose, MedSchema: MedSchema}
