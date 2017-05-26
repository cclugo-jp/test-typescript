// Import events module
var events = require('events');
// and mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test_db'
});

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var validar = function() {
    if ((q1ok == 'ok')&&(q2ok == 'ok')) {
        console.log(queryResp)
        connection.end();
    }   
}
eventEmitter.on('respuesta', validar);

var sqlCallback1 = function(err, response) {
    if (err) throw err;
    console.log('nombre: '+response[0].name);
    queryResp.push(response);
    q1ok = 'ok'
    eventEmitter.emit('respuesta');
}
var sqlCallback2 = function(err, response) {
    if (err) throw err;
    console.log('nombre: '+response[0].name);
    q2ok = 'ok'
    queryResp.push(response);
    eventEmitter.emit('respuesta');
}

var q1 = "SELECT * FROM test WHERE `name` LIKE 'asdf'";
var q2 = "SELECT * FROM test WHERE `name` LIKE 'pepe'";
var queryResp = []
var q1ok, q2ok
connection.query(q1, sqlCallback1) 
connection.query(q2, sqlCallback2) 

console.log("programa asincrono ok");