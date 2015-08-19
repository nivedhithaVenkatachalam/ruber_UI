
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , register = require('./routes/register')
  , http = require('http')
  , path = require('path');

var dataObject = require('./routes/ConnectionPooling');
var objectControl= require('./routes/ControlCenter');
var favicon = require('serve-favicon');
var app = express();
var poolNum=10;
app.use(favicon(__dirname + '/public/images/favicon.ico'));
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

dataObject.setPool(poolNum);
	
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/signup', routes.index);
app.get('/corporateUser', user.RegisterCorporateUser);
app.get('/corporateAdmin', user.RegisterCorporateAdmin);
app.get('/individualUser', user.RegisterIndividualUser);
app.get('/expert', user.RegisterExpert);
app.get('/resetPassword', user.resetPassword);
app.get('/home', routes.index);

app.post('/registerIndividualUser', register.confirmIndividualUser);
app.post('/registerCorporateAdmin', register.confirmCorporateAdmin);
app.post('/registerCorporateUser', register.confirmCorporateUser);
app.post('/registerExpertUser', register.confirmExpertUser);
	
app.get('/login', user.login);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
