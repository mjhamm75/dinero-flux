var React = require('react');
var ListOfBills = require('./list.of.bills.js');
var AddBills = require('./add.bills.js');
var NewBill = require('./new.bill.js');
var PayPeriods = require('./pay.periods.js');
var AddPayPeriod = require('./add.pay.period.js');

var App = React.createClass({
	render: function() {
		return (
			<div className="container-fluid">
				<div className="row col-md-12">
					<AddBills />
					<NewBill />
				</div>
				<div className="row">
					<div className="col-md-6">
						<ListOfBills />
					</div>
					<div className="col-md-1"></div>
					<div className="col-md-5">
						<AddPayPeriod />
						<PayPeriods />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;