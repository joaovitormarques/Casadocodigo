module.exports = function(app){
	app.get('/mozao', function(req, res){
		res.render('mozao/mozao');
	});
}