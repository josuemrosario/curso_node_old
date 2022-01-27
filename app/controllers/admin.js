module.exports.formulario_inclusao_noticia = function(application,req,res){
	res.render("admin/form_add_noticia.ejs",{validacao: {}, noticia:{}});

}

module.exports.noticias_salvar = function(application,req,res){
			var noticia = req.body;

		req.assert('titulo','Titulo é Obrigatório').notEmpty();
		req.assert('resumo','Resumo é Obrigatório').notEmpty();
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor','autor é Obrigatório').notEmpty();
		req.assert('Data_noticia','Data da Noticia é Obrigatória').notEmpty()
		req.assert('Data_noticia','Data em formato inválido').isDate({format: 'YYYY-MM-DD'});
		req.assert('noticia','Resumo da Noticia é Obrigatório').notEmpty();

		var erros = req.validationErrors();
		

		//console.log(erros);


		if (erros){
			res.render("admin/form_add_noticia.ejs",{validacao : erros, noticia : noticia});
			return;
		}
	
		var connection = application.config.dbConnection();
		var noticiasModel = new application.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticia,function(error, result){
							res.redirect("/noticias");

		} );
}