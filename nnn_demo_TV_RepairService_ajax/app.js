/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

//load customers route

var customer_table = require('./routes/customer_table');
var login = require('./routes/home');


var app = express();

var connection = require('express-myconnection');
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

app.use(
    connection(mysql, {

        host: 'localhost', //'localhost',
        user: 'root',
        password: 'root',
        port: 3306, //port mysql
        database: 'repairjs'

    }, 'request') //or single

);



// app.get('/', routes.index);
app.get('/', login.login);
// app.get('/addUser', login.login);

app.post('/auth', login.auth);
app.get('/contact', login.contact);
app.post('/contact', routes.save);

app.get('/customer_table', customer_table.list);
app.get('/customer_table/add', customer_table.add);
app.post('/customer_table/add', customer_table.save);


app.get('/customer_table/delete/:id', customer_table.delete_customer_table);
app.get('/customer_table/edit/:id', customer_table.edit);
app.post('/customer_table/edit/:id', customer_table.save_edit);
// app.post('/logout', login.logout);


app.use(app.router);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});