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

	highlightBill: function(billId) {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.HIGHLIGHT_BILL,
			billId: billId
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

	unHighlightBill: function(billId) {
		BillsDispatcher.handleViewAction({
			actionType: BillConstants.UN_HIGHLIGHT_BILL,
			billId: billId
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