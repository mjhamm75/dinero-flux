var BillConstants = require('../constants/bills.constants.js');
var BillsDispatcher = require('../dispatcher/bills.dispatcher.js');
var BillConstants = require('../constants/bills.constants.js');

var AppActions = {
	showAddBill: function() {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.SHOW_ADD_BILL
		});
	},

	addNewBill: function(bill) {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.ADD_NEW_BILL,
			bill: bill
		});
	},

	removeBill: function(billId) {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.REMOVE_BILL,
			id: billId
		});
	},

	addNewList: function() {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.ADD_NEW_LIST
		});
	}
};

module.exports = AppActions;