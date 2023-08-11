/* 3.Simula un cajero automático para retirar dinero con límite de saldo.*/

const retirar = prompt("Por favor, ingrese el monto a retirar: ");
console.log(retirar);

let saldo = 1000;

if (retirar !== null){
    if (retirar <= saldo) {
        saldo -= retirar;
        alert(`Retiro exitoso. Su nuevo saldo es ${saldo}`)
    }
    else {
        alert(`Retiro rechazado. Su saldo es ${saldo}`)
    }
}
else {
    alert("no ingreso un nombre")
}