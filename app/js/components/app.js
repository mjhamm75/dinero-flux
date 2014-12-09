var React = require('react');
var AppActions = require('../actions/app.actions.js');
var Catalog = require('./catalog.js');
var Cart = require('./cart.js');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Lets Shop</h1>
				<Catalog />
				<h1>Cart</h1>
				<Cart />
			</div>
		);
	}
});

module.exports = App;