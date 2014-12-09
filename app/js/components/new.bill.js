var React = require('react');
var BillsActions = require('../actions/bills.actions.js');
var BillsStore = require('../stores/bills.store.js');

function showNewBill() {
	return {showAddBill: BillsStore.getShowAddBill()};
}

var NewBill = React.createClass({
	getInitialState: function() {
		return showNewBill();
	},
	componentWillMount: function() {
		 BillsStore.addChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(showNewBill());
	},

	_clearForm: function() {
		this.refs.billName.getDOMNode().value = "";
		this.refs.monthlyAmount.getDOMNode().value = "";
		this.refs.totalAmount.getDOMNode().value = "";
	},

	handleClick: function() {
		var bill = {
			name: this.refs.billName.getDOMNode().value,
			monthlyAmount: this.refs.monthlyAmount.getDOMNode().value,
			totalAmount: this.refs.totalAmount.getDOMNode().value
		};
		BillsActions.addNewBill(bill);
		this._clearForm();
	},

	render: function() {
		var style = {
			visibility: showNewBill().showAddBill ? 'visible': 'hidden'
		};
		return 	<form style={style} className="form-inline table-padding" role="form">
					<div className="form-group">
						<div className="input-group">
							<label className="sr-only">Bill Name</label>
							<input type="text" className="form-control" ref="billName" placeholder="Bill Name" />
						</div>
					</div>
					<div className="form-group">
						<label className="sr-only">Monthly Amount</label>
						<input type="number" className="form-control" ref="monthlyAmount" placeholder="Monthly Amount" />
					</div>
					<div className="form-group">
						<label className="sr-only">Total Amount</label>
						<input type="number" className="form-control" ref="totalAmount" placeholder="Total Amount" />
					</div>
					<button onClick={this.handleClick} type="submit" className="btn btn-success">Add Bill</button>
				</form>;
	}
});

module.exports = NewBill;
