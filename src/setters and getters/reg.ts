// regular setters and getters

// to avoid compilation error
declare var require: any

var variables = require('./reg mod');
variables.setVar1(11);
variables.setVar2(22);
console.log(variables.getVar());