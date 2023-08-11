/* 1.Calcular la suma de dos números e imprimir el resultado.*/

const numero1 = prompt("por favor, ingrese el primer numero: ");
console.log(numero1);

const numero2 = prompt("por favor, ingrese el segundo numero: ");
console.log(numero2);


if (numero1 !== null && numero2 !== null){
    var suma = parseInt(numero1) + parseInt(numero2);
    alert("La suma de los numero es: " + suma);
}
else {
    alert("no ingreso numeros")
}


