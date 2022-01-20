var app = require('./config/server')


// Codigo inutilizado após implantacao do consign

//var rotaHome = require('./app/routes/home');
//rotaHome(app);


//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
//rotaFormInclusaoNoticia(app);

app.listen(3000, function(){
	console.log("Servidor ON");
});