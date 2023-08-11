/*1. Realiza un conteo regresivo desde un número dado hasta 1*/

const numero = prompt("Por favor, ingrese el numero para la cuenta regresiva: ");
console.log(numero);

let numero1 =parseInt(numero);

if (numero !== null){
    while (numero1 >= 0){
        alert(numero1);
        numero1 -= 1;
    }
    alert("Fin de cuenta regresiva")
}
else {
    alert("no ingreso un nombre")
}