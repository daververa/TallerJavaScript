/*2. Calcular el precio total de una compra que incluye 3 artículos con diferentes precios y cantidades. A la compra le aplicaremos el 10% de impuestos.*/

const precio1 = prompt("por favor, ingrese el precio del primer articulo: ");
console.log(precio1);

const cantidad1 = prompt("por favor, ingrese la cantidad del primer articulo: ");
console.log(cantidad1);

const precio2 = prompt("por favor, ingrese el precio del segundo articulo: ");
console.log(precio2);

const cantidad2 = prompt("por favor, ingrese la cantidad del segundo articulo: ");
console.log(cantidad2);

const precio3 = prompt("por favor, ingrese el precio del tercer articulo: ");
console.log(precio3);

const cantidad3 = prompt("por favor, ingrese la cantidad del tercer articulo: ");
console.log(cantidad3);


if (precio1 !== null && cantidad1 !== null && precio2 !== null && cantidad2 !== null  && precio3 !== null && cantidad3 !== null){
    var total = parseFloat(precio1) * parseInt(cantidad1) + parseFloat(precio2) * parseInt(cantidad2) + parseFloat(precio3) * parseInt(cantidad3);
    var totalImpuesto = total * 0.9;
alert("El precio a pagar con el descuentos es: " + totalImpuesto + " pesos");
}
else {
    alert("no ingreso numeros")
}



