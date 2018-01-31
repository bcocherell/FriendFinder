// dependencies
var friends = require('../data/friends');

module.exports = function(app) {

	// GET route used to display JSON of all possible friends
	app.get('/api/friends', function(req, res) {
		return res.json(friends);
	});
  
  // POST route to handle incoming survey results/logic
  app.post('/api/friends', function(req, res) {
				
		var friend = req.body;

		var lowestDifference = 41;
		var bestMatch = 0;

    // looping through friends to see who has the lowest total difference
		for (var i = 0; i < friends.length; i++){
		 	var difference = 0;

		 	for (var j = 0; j < friends[i].scores.length; j++){
		 		difference += Math.abs(parseInt(friend.scores[j]) - parseInt(friends[i].scores[j]));
		 	}

			if (difference < lowestDifference) {
				lowestDifference = difference;
				bestMatch = i;
			}
		}

    // add survey results to list of possible friends for next person
		friends.push(friend);

		return res.json(friends[bestMatch]);
	});
};