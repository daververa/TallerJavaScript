/*3. Calcular el monto de propina a dejar en un restaurante basado en el costo total de la comida y el porcentaje de propina 15% */

const total = prompt ("Ingrese la cantidad a pagar: ");
console.log(total);

var propina = parseInt(total) * 0.15;

alert("La propina a dar es: " + propina + " pesos");