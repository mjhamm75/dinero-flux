var React = require('react');
var BillsStore = require('./../stores/bills.store.js');

function getPayPeriods(){
	return {payperiods: BillsStore.getPayPeriods()};
}

var PayPeriods = React.createClass({
	getInitialState: function() {
		return getPayPeriods();
	},
	render: function() {
		var payperiods = this.state.payperiods.map(function(payperiod) {
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
							<tr>
								<td>hello</td>
								<td>new</td>
								<td>world</td>
							</tr>
						</tbody>
					</table>
				</div>;
		});
		return 	<div>{payperiods}</div>;
	}
});

module.exports = PayPeriods;
