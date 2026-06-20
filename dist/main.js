"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos las funciones y la interfaz
const entrada_1 = require("./entrada");
const operaciones_1 = require("./operaciones");
// Función principal
async function iniciar() {
    // Arreglo donde guardaremos los productos
    let carrito = [];
    // Variable para repetir el ciclo
    let seguir = true;
    console.log("=== FACTURACIÓN SIMPLE ===");
    // Mientras el usuario quiera seguir
    while (seguir) {
        // Pedimos datos
        const nombre = await (0, entrada_1.preguntar)("Nombre del producto: ");
        const precioTexto = await (0, entrada_1.preguntar)("Precio: ");
        const precio = Number(precioTexto);
        const cantidadTexto = await (0, entrada_1.preguntar)("Cantidad: ");
        const cantidad = Number(cantidadTexto);
        // Validación sencilla
        if (nombre === "" || isNaN(precio) || isNaN(cantidad)) {
            console.log("Datos incorrectos");
            continue;
        }
        // Guardar producto
        carrito.push({
            nombre,
            precio,
            cantidad
        });
        // Preguntar si desea continuar
        const respuesta = await (0, entrada_1.preguntar)("¿Agregar otro producto? (s/n): ");
        if (respuesta !== "s") {
            seguir = false;
        }
    }
    (0, entrada_1.cerrarEntrada)();
    // Calcular resultados
    const subtotal = (0, operaciones_1.calcularSubtotal)(carrito);
    const iva = (0, operaciones_1.calcularIVA)(subtotal);
    const total = (0, operaciones_1.calcularTotal)(subtotal, iva);
    // Mostrar factura
    console.log("\n====== FACTURA ======");
    for (let producto of carrito) {
        console.log(producto.nombre +
            " x" +
            producto.cantidad +
            " = Q" +
            (producto.precio * producto.cantidad));
    }
    console.log("-------------------");
    console.log("Subtotal: Q" + subtotal);
    console.log("IVA: Q" + iva);
    console.log("Total: Q" + total);
}
// Ejecutar programa
iniciar();
//# sourceMappingURL=main.js.map