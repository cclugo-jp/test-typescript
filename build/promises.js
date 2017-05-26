function suma1(numero, res_anterior) {
    setTimeout(function () {
        var suma = numero + res_anterior;
        return suma;
    }, 500);
    return 0;
}
var resultado2 = 0;
resultado2 = suma1(2, resultado2);
console.log(resultado2); // muestra 0 porque es asincrona con retraso
console.log('*******************************');
// ahora de modo asincrono con Promises
function suma2(numero, res_temporal) {
    var promesa = new Promise(function (solucion, fallo) {
        setTimeout(function () {
            res_temporal = numero + res_temporal;
            solucion(res_temporal);
        }, 500);
        if (!res_temporal) {
            fallo(new Error('No hay resultado'));
        }
    });
    return promesa;
}
var mostrar_resultado_noformat = function (p) {
    console.log(p);
    return p;
};
var resultado_formateado = function (pp) {
    console.log('el resultado es: ' + pp);
};
var resultado2 = 5;
//suma2(3, resultado).then(function (r) { console.log(r) })
suma2(4, resultado2).then(mostrar_resultado_noformat).then(resultado_formateado);
//# sourceMappingURL=promises.js.map