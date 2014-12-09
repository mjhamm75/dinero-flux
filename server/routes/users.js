
var users = {
	getUser: function(req, res) {
		res.send('getUser');
	},

	getUsers: function(req, res) {
		res.send('getUsers');
	},

	createUser: function(req, res) {
		res.send('createUser');
	}
};

module.exports = users;