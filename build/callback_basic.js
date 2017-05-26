function suma(numero_uno, numero_dos) {
    setTimeout(function () {
        var resultado = numero_uno + numero_dos;
        return resultado;
    }, 500);
}
var resultado = suma(2, 5);
console.log(resultado); // muestra undefined porque es asincrona con retraso
console.log('*********');
// ahora de modo asincrono
function suma_async(numero_uno, numero_dos, callback) {
    setTimeout(function () {
        var resultado = numero_uno + numero_dos;
        callback(resultado);
    }, 500);
}
var mostrar_resultado = function (p) {
    console.log(p);
};
suma_async(2, 5, mostrar_resultado);
//# sourceMappingURL=callback_basic.js.map