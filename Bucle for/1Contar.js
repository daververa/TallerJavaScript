/* 1. Utiliza un bucle for para contar desde 1 hasta un número dado capturado con un prompt.*/

const numero = prompt("Por favor, ingrese su el numero hasta el cual se va a contar: ");
console.log(numero);

if (numero !== null){
    for (let i = 1; i <= parseInt(numero); ++i ){
        alert(i);
    }
    alert("Fin del conteo")
}
else {
    alert("no ingreso un numero")
}