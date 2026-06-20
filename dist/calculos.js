"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSubtotal = calcularSubtotal;
exports.calcularIva = calcularIva;
exports.calcularTotal = calcularTotal;
function calcularSubtotal(precios) {
    return precios.reduce((acc, precio) => acc + precio, 0);
}
function calcularIva(subtotal, tasaIva = 0.12) {
    return subtotal * tasaIva;
}
function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}
//# sourceMappingURL=calculos.js.map