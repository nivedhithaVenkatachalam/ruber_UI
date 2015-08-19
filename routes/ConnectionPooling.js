/**
 * New node file
 */
//Connection pooling module. Uses a simple queue for maintaining a pool of connections.
var mysql = require('mysql');
var connectionPool = [];
var count=0;

function connect()
{
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'YES',
		port: '3306',
		database: 'ruber_data'
	});

	//connection.connect();
	connection.connect(function(err, conn) {
	    if(err) {
	         console.log('MySQL connection error: ', err);
	         process.exit(1);
	    }

	});

	return connection;
}

function setPool(numOfConn)
{
	count=numOfConn;
	for (var i = 0; i < numOfConn; i++)
	{
		connectionPool.push(connect());
	}
}

function getConnection()
{
	if(connectionPool.length >=1 )
	{
		return connectionPool.pop();
	}
}

function returnConnection(connection)
{
	
	
	connectionPool.push(connection);
	
}

exports.setPool = setPool;
exports.getConnection = getConnection;
exports.returnConnection = returnConnection;