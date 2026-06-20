import * as readline from "readline";

// Crear entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para preguntar
export function preguntar(texto: string): Promise<string> {

    return new Promise((resolver) => {

        rl.question(texto, (respuesta) => {
            resolver(respuesta);
        });

    });

}

// Cerrar consola
export function cerrarEntrada(): void {
    rl.close();
}