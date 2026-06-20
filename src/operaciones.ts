import { Producto } from "./interfaces";

// Calcular subtotal
export function calcularSubtotal(carrito: Producto[]): number {

    let subtotal = 0;

    for (let producto of carrito) {
        subtotal += producto.precio * producto.cantidad;
    }

    return subtotal;
}

// Calcular IVA
export function calcularIVA(subtotal: number): number {
    return subtotal * 0.12;
}

// Calcular total
export function calcularTotal(
    subtotal: number,
    iva: number
): number {

    return subtotal + iva;

}