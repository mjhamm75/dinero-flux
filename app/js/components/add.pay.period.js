var React = require('react');
var BillsActions = require('./../actions/bills.actions.js');

var AddPayPeriod = React.createClass({
	handleClick: function() {
		BillsActions.addNewList();
	},
	render: function() {
		return <button onClick={this.handleClick} className = "btn btn-primary" >Add Pay Period< /button>;
	}
});

module.exports = AddPayPeriod;
