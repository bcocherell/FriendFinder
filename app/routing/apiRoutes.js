// Dependencies
var friends = require('../data/friends');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		return res.json(friends);
	});
  
  app.post('/api/friends', function(req, res) {
				
		var friend = req.body;
		
		console.log(req.body);
		console.log(friend);
		
		var lowestDifference = 41;
		var bestMatch = 0;

		for (var i = 0; i < friends.length; i++){
		 	var difference = 0;

		 	for (var j = 0; j < friends[i].scores.length; j++){
		 		difference += Math.abs(friend.scores[j] - friends[i].scores[j]);
		 	}

			if (difference < lowestDifference) {
				lowestDifference = difference;
				bestMatch = i;
			}
		}

		console.log(lowestDifference);

		friends.push(friend);

		return res.json(friends[bestMatch]);
	});
};