/*1. Multiplica un número por 2 utilizando un operador de asignación.*/

const numero = prompt("Ingrese el numero que desea multiplicar por 2: ");
console.log(numero);

if (numero !== null){
    let numero1 = parseInt(numero);
    numero1 *= 2;
    alert("El resultado de la operacion es: " + numero1);
}
else {
    alert("no ingreso un nombre")
}