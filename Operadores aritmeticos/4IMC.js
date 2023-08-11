/* 4. Calcular el IMC de una persona utilizando su peso en kilogramos y su altura en metros. */

const peso = prompt("Por favor, ingrese su peso en kilogramos: ");
console.log(peso);

const altura = prompt("Por favor, ingrese altura en metros: ");
console.log(altura);

if (peso !== null && altura !== null){
    let altura1 = parseFloat(altura);
    var imc = peso / (altura1 * altura1)
    alert("Su IMC es: " + imc.toFixed(2) )
}
else {
    alert("no ingreso numeros")
}
