module.exports = function(app){
	app.get('/produtos', function(req, res){
		res.render('produtos/lista');
	});

	app.get('/produtos/form', function(req, res){
		res.render('produtos/form',  {validationErrors:{}, produto: {}}
			);
});
app.post('/produtos/salva', function(req, res){
	var produto = req.body;
	var validadorTitulo = req.assert('titulo', 'Titulo deve ser preenchido');
	validadorTitulo.notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.format({
			html: function(){
				res.status(400).render("produtos/form",{validationErrors:errors,produto:produto});
			},
			json: function(){
				res.status(400).send(errors);
			}
		});
		return;
	}
	console.log('salvou produto no banco '+produto.titulo +' '+produto.preco + ' '+produto.descricao);
	res.render('produtos/lista');
});
}