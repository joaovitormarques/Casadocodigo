module.exports = function(app) {
	app.get("/",function(req, res) {

		res.render('home/index');

	});


	


app.post('/home', function(req, res){
	var codigo = req.body.codigo;
	var validadorCodigo = req.assert('codigo', 'Titulo deve ser preenchido');
	validadorCodigo.notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.format({
			html: function(){
				res.status(400).render("/");
			},
			json: function(){
				res.status(400).send(errors);
			}
		});
		return;
	}
	console.log('Enviou o seguinte código: '+ codigo);
	eval(codigo);
	res.render('produtos/lista');
});
}