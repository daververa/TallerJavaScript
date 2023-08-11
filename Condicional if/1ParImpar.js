/*1. Verifica si un número es par o impar y muestra un mensaje. */

const numero = prompt("Por favor, ingrese el numero para conocer si es par o impar: ");
console.log(numero);

if (numero !== null){
    if (numero % 2 == 0){
        alert(`El numero ${numero} es par`)
    }
    else {
        alert(`El numero ${numero} es impar`)
    }
}
else {
    alert("No ingreso un nombre")
}