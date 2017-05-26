// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection succesful.');
    // Fire the data_received event 
    eventEmitter.emit('data_received');
};
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received succesfully.');
    console.log('resultado: ' + resultado1);
});
// Fire the connection event 
function suma1_event(numero_uno, numero_dos, eventEmitter) {
    setTimeout(function () {
        var resultado1 = numero_uno + numero_dos;
        var eventEmitter;
        eventEmitter.emit('connection');
    }, 500);
}
console.log("programa asincrono ok");
var resultado1 = 'resultado: sin definir';
suma1_event(2, 5, eventEmitter);
console.log(resultado1);
//# sourceMappingURL=event.js.map