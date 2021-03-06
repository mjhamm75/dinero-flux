var Dispatcher = require('./dispatcher.js');
var merge = require('react/lib/merge');

var BillsDispatcher = merge(Dispatcher.prototype, {
	handleViewAction: function(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

module.exports = BillsDispatcher;