var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator())


/* Neste ponto tomar cuidado. Se fosse exportado todo o diretorio
esse aquivo server.js seria carregado e exportado em loooping infinito
para evitar carregar apenas o arquivo (usando a extensão) */
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app;


