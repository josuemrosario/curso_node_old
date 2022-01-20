var mysql = require('mysql');


var connMySQL = function(){
	console.log('Conexao com bd portal_noticias estabelecida');
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'portal_noticias'

	});
}

module.exports = function() {
	console.log('AutoLoad carregou o modulo de conexao com o BD');
	return connMySQL;
}