var variables = require('./full mod');
var valores1 = { n1: 11, n2: 22 };
var obj1 = variables(valores1);
obj1.sumar();
var valores2 = { n1: 111, n2: 222 };
var obj2 = variables(valores2);
console.log(obj1.getVar());
console.log(obj2.getVar());
//# sourceMappingURL=full.js.map