var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');


//Connecting to the database
var connection = mysql.createConnection({
	host     : 'localhost:3306',
	user     : 'root',
	password : 'M{36ne$8',
	database : 'nodelogin'
});

//more packages contained to be used for the web application
var app = express();
//Using Express' packages
app.use(session({
	secret: 'Q8!m{UOE}ogbJzt?*CjW',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//displaying the client to the login page.
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

//When the user enters their details into the Username and Passwords textboxes
//and clicks submit
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			//An error is occuing here stating that length is undefined. Most likely because it can't connect to the database.
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect login details! \nTry Again');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//Redirects the user to the home page.
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

//The web application's port to listen on.
app.listen(3000);