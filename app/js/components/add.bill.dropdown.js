var BillsActions = require('../actions/bills.actions.js');
var BillsStore = require('../stores/bills.store.js');
var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

function getPayPeriods(){
	return {payperiods: BillsStore.getPayPeriods()};
}

var AddBillDropdown = React.createClass({
	getInitialState: function() {
		return 	getPayPeriods();
	},
	handleSelect: function(eventKey) {
		BillsActions.addBillToPayperiod(this.props.billId, eventKey);
	},
	render: function() {
		var payperiods = this.state.payperiods.map(function(payperiod) {
			return <MenuItem eventKey={payperiod.id} onSelect={this.handleSelect}>{payperiod.name}</MenuItem>;
		});
		return	<DropdownButton onSelect={this.handleSelect}>
					{payperiods}
					<MenuItem divider />
					<MenuItem eventKey="create">Create New List</MenuItem>
				</DropdownButton>;
	}
});

module.exports = AddBillDropdown;