//Escribe una función llamada "calcularPromedio" que tome un array de números como argumento y devuelva el promedio de esos números. Asegúrate de manejar correctamente los casos en los que el array esté vacío.

function calcularPromedio (...notas){
    let suma = 0;
    for (let i = 0; i<notas.length; i++){
        suma += notas[i]
    }
    let promedio = suma / notas.length;
    
    console.log(promedio.toFixed(1));
}

calcularPromedio(4,5,7,3);

//Escribe una función llamada filtrarNumerosPares que tome un array de números como argumento y devuelva un nuevo array que contenga solo los números pares.

function numPar(...numbers){
    numPar = numbers.filter(par => par %2 === 0);
    return numPar
}

console.log(numPar(2,3,4,5,6,7,8,9,10));

// Escribe una función llamada filtrarPalabrasPorLongitud que tome un array de palabras y un número mínimo de longitud como argumentos, y devuelva un nuevo array que contenga solo las palabras con una longitud mayor que el número mínimo.

let listWordsX = ['Hello','Better','Peruvian','Functions','Javascript']

function filtrarPalabrasPorLongitud (listWordsX, long){
    let wordFilter = listWordsX.filter(word => word.length <= long)
    return wordFilter
}

console.log(filtrarPalabrasPorLongitud(listWordsX,9))


//Escribe una función llamada filtrarProductosDisponibles que tome un array de productos y un precio máximo como argumentos, y devuelva un nuevo array que contenga solo los productos disponibles y cuyo precio sea menor o igual al precio máximo.

const productos = [
    { nombre: 'Camiseta', precio: 20, disponible: true },
    { nombre: 'Zapatos', precio: 50, disponible: false },
    { nombre: 'Pantalones', precio: 30, disponible: true },
    { nombre: 'Sombrero', precio: 10, disponible: true }
  ];

function filtrarProductosDisponibles (productos,precio){
    let productosDisponibles = productos.filter(producto => producto.disponible === true && producto.precio <= precio)
    return productosDisponibles
}

console.log(filtrarProductosDisponibles(productos,30));

//Escribe una función llamada filtrarNumerosImpares que tome un array de números como argumento y devuelva un nuevo array que contenga solo los números impares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarNumerosImpares (numeros){
    let numerosImpares = numeros.filter(numero => numero %2 === 1);
    return numerosImpares
}

console.log(filtrarNumerosImpares(numeros))

//Escribe una función llamada filtrarEstudiantesAprobados que tome un array de estudiantes, un promedio mínimo y una edad mínima como argumentos, y devuelva un nuevo array que contenga solo los estudiantes que cumplan ambas condiciones: tener un promedio mayor o igual al promedio mínimo y ser mayores de edad.

const estudiantes = [
    { nombre: 'Ana', edad: 20, promedio: 8.5 },
    { nombre: 'Carlos', edad: 18, promedio: 7.2 },
    { nombre: 'María', edad: 22, promedio: 9.3 },
    { nombre: 'Pedro', edad: 19, promedio: 6.8 }
  ];

  function filtrarEstudiantesAprobados (promedioMin, edadMin,estudiantes){
            
    let studentsFilter =  estudiantes.filter(estudiante => estudiante.edad >= edadMin && estudiante.promedio >= promedioMin)

    return studentsFilter
  }

  console.log(filtrarEstudiantesAprobados(7,20,estudiantes))