var BillsDispatcher = require('../dispatcher/bills.dispatcher.js');
var BillsConstants = require('../constants/bills.constants.js');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var payperiods = 	[{
						id: 1,
						name: "Period 1"
					},
					{
						id: 2,
						name: "Period 2"
					},
					{
						id: 3,
						name: "Period 3"
					}];

var bills = 	[{
				id: 1,
				name: 'House Payment',
				monthlyAmount: 1100,
				totalAmount: 400000
			},{
				id: 2,
				name: 'Car Payment',
				monthlyAmount: 250,
				totalAmount: 4000
			},{
				id: 3,
				name: 'Water Bill',
				monthlyAmount: 34.99
			}];

var showAddBill = false;

function _toggleShowAddBill() {
	showAddBill = !showAddBill;
}

function _addNewBill(bill) {
	bills.unshift(bill);
	_toggleShowAddBill();
}

function _removeBill(billId) {
	var result = bills.filter(function(bill) {
		return bill.id !== billId;
	});
	bills = result;
}

var AppStore = merge(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getShowAddBill: function() {
		return showAddBill;
	},

	getBills: function() {
		return bills;
	},

	getPayPeriods: function() {
		return payperiods;
	},

	dispatcherIndex: BillsDispatcher.register(function(payload) {
		var action = payload.action;
		switch(action.actionType) {
			case BillsConstants.SHOW_ADD_BILL:
				_toggleShowAddBill();
				break;
			case BillsConstants.ADD_NEW_BILL:
				_addNewBill(action.bill);
				break;
			case BillsConstants.REMOVE_BILL:
				_removeBill(action.id);
				break;
			case BillsConstants.ADD_NEW_LIST:
				_addNewList();
				break;
		}

		AppStore.emitChange();

		return true;
	})
});

module.exports = AppStore;