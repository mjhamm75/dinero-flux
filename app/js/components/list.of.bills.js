var React = require('react');
var BillsStore = require('../stores/bills.store.js');
var BillActions = require('../actions/bills.actions.js');
var numeral = require('numeral');
var AddBillDropDown = require('./add.bill.dropdown.js');

function getBills() {
	return { bills: BillsStore.getBills() };
}

var ListOfBills = React.createClass({
	getInitialState: function() {
		return getBills();
	},

	componentWillMount: function() {
		 BillsStore.addChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getBills());
	},

	_removeBill: function(bill) {
		BillActions.removeBill(bill.id);
	},

	render: function() {
		var that = this;
		var totalOwed = 0;
		var totalMonthly = 0;
		var bills = this.state.bills.map(function(bill) {
			totalMonthly += parseFloat(bill.monthlyAmount);
			totalOwed += !isNaN(parseFloat(bill.totalAmount)) ? parseFloat(bill.totalAmount): 0;
			return (
				<tr key={bill.id}>
					<td>{bill.name}</td>
					<td>{numeral(bill.monthlyAmount).format('0,0.00')}</td>
					<td>{numeral(bill.totalAmount).format('0,0.00')}</td>
					<td><button onClick={that._removeBill.bind(that, bill)} type="button" className="btn btn-circle"><i className="glyphicon glyphicon-remove"></i></button></td>
					<td>
						<AddBillDropDown bill={bill.id}/>
					</td>
				</tr>
			);
		});
		return 	<div>
					<table className="table table-hover total-line">
						<thead>
							<tr>
								<th>Bill Name</th>
								<th>Monthly Amount</th>
								<th>Total</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{bills}
							<tr>
								<td></td>
								<td>{numeral(totalMonthly).format('$0,0.00')}</td>
								<td>{numeral(totalOwed).format('$0,0.00')}</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>;
	}
});

module.exports = ListOfBills;
