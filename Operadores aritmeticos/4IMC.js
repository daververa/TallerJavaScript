const peso = prompt("Por favor, ingrese su peso en kilogramos: ");
console.log(peso);

const altura = prompt("Por favor, ingrese altura en metros: ");
console.log(altura);

if (peso !== null && altura !== null){
    parseFloat(altura);
    var imc = peso / (altura * altura)
    alert("Su IMC es: " + imc.toFixed(2) )
}
else {
    alert("no ingreso numeros")
}
