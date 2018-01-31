// Dependencies
var path = require('path');

// get project root directory
var appDir = path.dirname(require.main.filename);

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(appDir, 'app/public/home.html'));
	});
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(appDir, 'app/public/survey.html'));
	});
};