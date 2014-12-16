var BillConstants = require('../constants/bills.constants.js');
var BillsDispatcher = require('../dispatcher/bills.dispatcher.js');
var BillConstants = require('../constants/bills.constants.js');

var AppActions = {
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

	showAddBill: function() {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.SHOW_ADD_BILL
		});
	},

	addNewPayperiod: function() {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.ADD_NEW_LIST
		});
	},

	addBillToPayperiod: function(billId, payperiodId) {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.ADD_BILL_TO_LIST,
			billId: billId,
			payperiodId: payperiodId
		});
	}
};

module.exports = AppActions;