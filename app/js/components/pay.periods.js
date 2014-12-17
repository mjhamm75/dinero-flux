var React = require('react');
var BillsStore = require('./../stores/bills.store.js');
var BillActions = require('./../actions/bills.actions.js');

function getPayPeriods(){
	return {payperiods: BillsStore.getPayPeriods()};
}

function getBillsByPayperiodId(payperiodId) {
	return {bills: BillsStore.getBillsByPayperiodId(payperiodId)};
}

var PayPeriods = React.createClass({
	getInitialState: function() {
		return getPayPeriods();
	},

	componentWillMount: function() {
		 BillsStore.addChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getPayPeriods());
	},

	_highlightBill: function(billId) {
		BillActions.highlightBill(billId);
	},

	_unHighlightBill: function(billId) {
		BillActions.unHighlightBill(billId);
	},

	render: function() {
		var that = this;
		var payperiods = this.state.payperiods.map(function(payperiod) {
			var total = 0;
			var bills = getBillsByPayperiodId(payperiod.id).bills.map(function(bill) {
				var highlight = {
					'background-color': bill.highlight ? '#f5f5f5' : ''
				};
				total += bill.monthlyAmount;
				return (	<tr style={highlight} onMouseOver={that._highlightBill.bind(that, bill.id)} onMouseOut={that._unHighlightBill.bind(that, bill.id)}>
							<td>{bill.name}</td>
							<td>{bill.monthlyAmount}</td>
							<td>n/a</td>
						</tr>);
			});

			return <div className="slide-down">
					<div className="table-due">{payperiod.name}</div>
					<div>{payperiod.periodTotal}</div>
					<table className="table">
						<thead>
							<tr>
								<th>Bill</th>
								<th>Payment</th>
								<th>Date Due</th>
							</tr>
						</thead>
						<tbody>
							{bills}
							<tr>
								<td>Total</td>
								<td>{total}</td>
								<td></td>
							</tr>
							<tr>
								<td>Remainder</td>
								<td>{payperiod.periodTotal - total}</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>;
		});
		return 	<div>{payperiods}</div>;
	}
});

module.exports = PayPeriods;
