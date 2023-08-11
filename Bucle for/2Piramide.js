/* Imprime un patrón de números triangulares */

const filas = prompt("Por favor, digite el numero de filas de la piramide de numeros: ");
console.log(filas);

let piramide = [];

if (filas !== null){
    for (let i = 1; i <= parseInt(filas); i++){
        let fila = "";
        for (let j = 1; j <= i; j++){
            fila += j + " ";
        }
        piramide.push(fila);
        
    }
    let piramideTriangulo = piramide.join("\n")
    alert(piramideTriangulo);
}
else {
    alert("no ingreso un numero de filas")
}