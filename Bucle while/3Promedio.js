/* 3. Crearemos un programa que permita a un profesor registrar las notas de los estudiantes, calcular el promedio de cada estudiante y el promedio de toda la clase.*/

const numeroEstudiantes = prompt("Por favor, ingrese el numero de estudiantes: ");
console.log(numeroEstudiantes);

let contador = 0 ;
let Nombres =[];
let promedioEstudiantes = [];

if (numeroEstudiantes !== null){2
    while (contador < numeroEstudiantes){
        let nombre = prompt("Ingrese el nombre del estudiante numero #" + (contador + 1))
        Nombres.push(nombre);
    
        const notas = prompt("Ingrese las notas del estudiante separados por comas:");
        const arregloNotas = notas.split(",").map(nota => parseInt(nota));
    
        let suma = 0;
        let contadorNotas = 0;
    
        while (contadorNotas < arregloNotas.length ){
            suma += arregloNotas[contadorNotas];
            contadorNotas += 1;
        }
        let promedio = suma / arregloNotas.length;
        promedioEstudiantes.push(promedio);
    
        contador +=1;
    }
    
    /*Promedios general*/
    
    let suma2 = 0;
    let contador2 = 0;
    while (contador2 < numeroEstudiantes){
        suma2 += promedioEstudiantes[contador2];
        contador2 += 1;
    }
    
    let promedioGenera = suma2 / promedioEstudiantes.length;
    
    /* Mostrar resultados*/
    
    let contador3 = 0;
    
    while (contador3 < numeroEstudiantes){
        alert(`El promedio de ${Nombres[contador3]} es ${promedioEstudiantes[contador3]}`);
        contador3 +=1;
    }
    alert(`El promedio de todo el grupo es ${promedioGenera}`);
}
else {
    alert("no ingreso un numero de estudiantes")
}
