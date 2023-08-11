/*Categoriza los números de un arreglo en un rango como positivos, negativos o cero. */

const numeros = prompt("Ingrese los números del arreglo separados por comas:");
const arregloNumeros = numeros.split(",").map(numero => parseInt(numero));

let positivos = [];
let negativos = [];
let ceros = [];

if (numeros !== null){
    arregloNumeros.forEach(numeroCaracterizacion => {
        if (numeroCaracterizacion > 0){
            positivos.push(numeroCaracterizacion);
        }
        else if (numeroCaracterizacion < 0){
            negativos.push(numeroCaracterizacion);
        }
        else {
            ceros.push(numeroCaracterizacion)
        }
    });
    alert(`los numeros positivos son: ${positivos}`);
    alert(`los numeros negativos son: ${negativos}`);
    alert(`los numeros ceros son: ${ceros}`);
}
else {
    alert("no ingreso un nombre")
}