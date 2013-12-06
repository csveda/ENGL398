var express = require('express');
var app = express();

app.configure(function() {
	app.use(
		'/',
		express.static(__dirname),
		express.bodyParser(),
		express.logger(),
		express.methodOverride(),
		express.errorHandler({
			dumbException: true,
			showStack: true
		})
	);
});

app.get('/', function(req, res) {
	res.redirect('/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('listening on port ' + port);
});