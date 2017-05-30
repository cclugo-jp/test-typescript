var Valores = function () {
    this.datos = { n1: null, n2: null, operacion: null };
    this.rellenar = function (x) {
        for (var propiedad in this.datos) {
            if (this.datos[propiedad] !== 'undefined') {
                this.datos[propiedad] = x[propiedad];
            }
        }
    };
    this.sumar = function () {
        this.datos.operacion = this.datos.n1 + this.datos.n2;
    };
    this.restar = function () {
        this.datos.opercion = this.datos.n1 - this.datos.n2;
    };
    this.getVar = function () { return this.datos; };
};
module.exports = function (x) {
    var instancia = new Valores();
    instancia.rellenar(x); // factory function (design pattern)\
    return instancia;
};
//# sourceMappingURL=full mod.js.map