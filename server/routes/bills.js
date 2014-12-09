
var bills = {
	getBill: function(req, res) {
		res.send('getBill');
	},

	getBills: function(req, res) {
		res.send('getBills');
	},

	createBill: function(req, res) {
		res.send('createBill');
	}
};

module.exports = bills;