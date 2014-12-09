var React = require('react');
var BillsActions = require('../actions/bills.actions.js');

var AddBills = React.createClass({
	handleClick: function() {
		BillsActions.showAddBill();
	},

	render: function() {
		return <button onClick={this.handleClick} className = "btn btn-primary" >Add Bill < /button>;
	}
});

module.exports = AddBills;
