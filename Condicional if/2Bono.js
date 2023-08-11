/* Calcula el bono de un empleado según su rendimiento.
Siendo mayor o igual a 90=bono de 500
Mayor o igual de 80 =bono de 300
Menor a 80 de 100 */

const rendimiento1 = prompt("Por favor, ingrese el rendimiento del empleado: ");
console.log(rendimiento1);

let rendimiento = parseInt(rendimiento1);

if (rendimiento !== null){
    if (rendimiento >= 90){
        alert("El empleado tiene un bono de 500")
    }
    else if ( rendimiento >= 80 && rendimiento < 90){
        alert("El empleado tiene un bono de 300")
    }
    else {
        alert("El empleado tiene un bono de 100")
    }
}
else {
    alert("no ingreso un nombre")
}