var PORT = 3000;
var express = require('express');
var bills = require('./routes/bills.js');
var users = require('./routes/users.js');

var server = express();

server.get('/bills', bills.getBills);
server.get('/bills/:id', bills.getBill);
server.post('/bills', bills.createBill);

server.get('/users', users.getUsers);
server.get('/users/:id', users.getUser);
server.post('/users', users.createUser);

server.listen(PORT, function() {
	console.log('listening to port ' + PORT);
});