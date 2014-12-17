var BillsDispatcher = require('../dispatcher/bills.dispatcher.js');
var BillsConstants = require('../constants/bills.constants.js');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var CHANGE_EVENT = "change";

var payperiods = 	[{
						id: 1,
						name: "1st Pay Check",
						periodTotal: 2501,
						highlight: false,
						bills: []
					},
					{
						id: 2,
						name: "2nd Pay Check",
						periodTotal: 2501,
						highlight: false,
						bills: []
					},
					{
						id: 3,
						name: "Contract",
						periodTotal: 2200,
						highlight: false,
						bills: []
					}];

var bills = 	[{
				id: 1,
				name: 'House Payment',
				monthlyAmount: 1100,
				totalAmount: 400000,
				highlight: false
			},{
				id: 2,
				name: 'Car Payment',
				monthlyAmount: 250,
				totalAmount: 4000,
				highlight: false
			},{
				id: 3,
				name: 'Water Bill',
				monthlyAmount: 34.99,
				highlight: false
			}];

var showAddBill = false;

function _toggleShowAddBill() {
	showAddBill = !showAddBill;
}

function _addNewBill(bill) {
	bills.unshift(bill);
	_toggleShowAddBill();
}

function _highlightBill(billId) {
	var b = _.filter(bills, {id: billId})
	b.forEach(function(bill) {
		bill.highlight = true;
	})
}

function _unHighlightBill(billId) {
	var b = _.filter(bills, {id: billId})
	b.forEach(function(bill) {
		bill.highlight = false;
	})
}

function _removeBill(billId) {
	var result = bills.filter(function(bill) {
		return bill.id !== billId;
	});
	bills = result;
}

function _addNewPayperiod() {
	var payperiod = {
		id: 5,
		name: 'hello',
		bills: []
	};
	payperiods.push(payperiod);
}

function _addBillToList(billId, payperiodId) {
	var payperiod = _.findWhere(payperiods, {id: payperiodId});
	var bill = _.findWhere(bills, {id: billId});
	payperiod.bills.push(bill);
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

	getBillsByPayperiodId: function(payperiodId) {
		return _.findWhere(payperiods, {id: payperiodId}).bills;
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
			case BillsConstants.HIGHLIGHT_BILL:
				_highlightBill(action.billId);
				break;
			case BillsConstants.UN_HIGHLIGHT_BILL:
				_unHighlightBill(action.billId);
				break;
			case BillsConstants.REMOVE_BILL:
				_removeBill(action.id);
				break;
			case BillsConstants.ADD_NEW_LIST:
				_addNewPayperiod();
				break;
			case BillsConstants.ADD_BILL_TO_LIST:
				_addBillToList(action.billId, action.payperiodId);
		}

		AppStore.emitChange();

		return true;
	})
});

module.exports = AppStore;