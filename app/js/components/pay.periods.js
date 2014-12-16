var React = require('react');
var BillsStore = require('./../stores/bills.store.js');

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

	render: function() {
		var payperiods = this.state.payperiods.map(function(payperiod) {
			var total = 0;
			var bills = getBillsByPayperiodId(payperiod.id).bills.map(function(bill) {
				total += bill.monthlyAmount;
				return (	<tr>
							<td>{bill.name}</td>
							<td>{bill.monthlyAmount}</td>
							<td>n/a</td>
						</tr>);
			});

			return <div className="slide-down">
					<div className="table-due">{payperiod.name}</div>
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
								<td></td>
								<td>{total}</td>
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
