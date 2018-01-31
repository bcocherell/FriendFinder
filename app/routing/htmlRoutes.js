// dependencies
var path = require('path');

// get project root directory
var appDir = path.dirname(require.main.filename);

module.exports = function(app) {
	
	// catch-all route to home.html
	app.get('/', function(req, res) {
		res.sendFile(path.join(appDir, 'app/public/home.html'));
	});

	// route to survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(appDir, 'app/public/survey.html'));
	});
};