"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSubtotal = calcularSubtotal;
exports.calcularIVA = calcularIVA;
exports.calcularTotal = calcularTotal;
// Calcular subtotal
function calcularSubtotal(carrito) {
    let subtotal = 0;
    for (let producto of carrito) {
        subtotal += producto.precio * producto.cantidad;
    }
    return subtotal;
}
// Calcular IVA
function calcularIVA(subtotal) {
    return subtotal * 0.12;
}
// Calcular total
function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}
//# sourceMappingURL=operaciones.js.map