// Importamos las funciones y la interfaz
import { preguntar, cerrarEntrada } from "./entrada";
import { Producto } from "./interfaces";
import { calcularSubtotal, calcularIVA, calcularTotal } from "./operaciones";

// Función principal
async function iniciar() {

    // Arreglo donde guardaremos los productos
    let carrito: Producto[] = [];

    // Variable para repetir el ciclo
    let seguir = true;

    console.log("--- FACTURACIÓN ---");

    // Mientras el usuario quiera seguir
    while (seguir) {

        // Pedimos datos
        const nombre = await preguntar("Nombre del producto: ");

        const precioTexto = await preguntar("Precio: ");
        const precio = Number(precioTexto);

        const cantidadTexto = await preguntar("Cantidad: ");
        const cantidad = Number(cantidadTexto);

        // Validaciones
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
        const respuesta = await preguntar("¿Agregar otro producto? (s/n): ");

        if (respuesta !== "s") {
            seguir = false;
        }
    }

    cerrarEntrada();

    // Calcular resultados
    const subtotal = calcularSubtotal(carrito);
    const iva = calcularIVA(subtotal);
    const total = calcularTotal(subtotal, iva);

    // Mostrar factura
    console.log("\n====== FACTURA ======");

    for (let producto of carrito) {
        console.log(
            producto.nombre +
            " x" +
            producto.cantidad +
            " = Q" +
            (producto.precio * producto.cantidad)
        );
    }

    console.log("-------------------");
    console.log("Subtotal: Q" + subtotal);
    console.log("IVA: Q" + iva);
    console.log("Total: Q" + total);
}

// Ejecutar programa
iniciar();