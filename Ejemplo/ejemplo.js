const nombre = prompt("Por favor, ingrese su nombre: ");
console.log(nombre);

if (nombre !== null){
    alert(`Hola, mi nombre es ${nombre}`);
}
else {
    alert("no ingreso un nombre")
}