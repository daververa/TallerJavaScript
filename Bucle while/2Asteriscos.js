/*Imprime un patrón de asteriscos como el siguiente:*/

const filas = prompt("Por favor, ingrese el numero de filas de la piramide: ");
console.log(filas);
let filas1 =parseInt(filas)

let piramide = [""];
let contadorFilas = 1;

if (filas !== null){
    while (contadorFilas <= filas1){
        fila = "";
        let numeroAsteriscos =  1;
        while(numeroAsteriscos <= contadorFilas){
            numeroAsteriscos += 1;
            fila += "*" + " ";
        }5
        piramide.push(fila)
        contadorFilas += 1;
    }
    let piramideTriangulo = piramide.join("\n")
    alert(piramideTriangulo);
}
else {
    alert("no ingreso un nombre")
}