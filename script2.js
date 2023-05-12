//Dado un array de números, filtra los números mayores que 5.
const numbers = [2, 5, 8, 10, 4, 7];
let numFiltrados = numbers.filter(number => number > 5)
console.log(numFiltrados);

//function
function mayorQue (numbers, num){
 let numMayor = numbers.filter(number => number > num)
   return numMayor
}
console.log(mayorQue(numbers,4));

//Dado un array de palabras, filtra las palabras que tengan más de 5 letras.
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

let wordsFilter = words.filter(word => word.length > 5)
console.log(wordsFilter)

//Dado un array de objetos que representan libros, filtra los libros que tengan un rating mayor o igual a 4.

const books = [
    { title: 'JavaScript', rating: 4.5 },
    { title: 'Python', rating: 3.9 },
    { title: 'Java', rating: 4.8 },
    { title: 'C++', rating: 3.2 },
    { title: 'Ruby', rating: 4.1 }
  ];

  let booksFilter = books.filter(book => book.rating > 4)
  console.log(booksFilter);

  //Dado un array de palabras, filtra las palabras que comiencen con la letra 'S'.

  const frutsArray = ['apple', 'banana', 'strawberry', 'orange', 'grape'];

  let wordWithS = frutsArray.filter(fruts => /S/i.test(fruts))
  console.log(wordWithS);

  //Dado un array de objetos que representan personas, filtra las personas que sean mayores de edad (mayores o iguales a 18 años).
  const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 17 },
    { name: 'Mike', age: 32 },
    { name: 'Emily', age: 20 },
    { name: 'David', age: 15 }
  ];

  let peopleold = people.filter(people => people.age >= 18)
  console.log(peopleold);

  
  //Cree una función que tome dos argumentos (elemento, tiempos). El primer 
  //argumento (elemento) es el elemento que necesita repetirse, mientras que el 
  //segundo argumento (veces) es la cantidad de veces que se debe repetir el 
  //elemento. Devuelve el resultado en un array.
  //repeat(13, 5) ➞ [13, 13, 13, 13, 13


 function repeat(element, time){
   let elementArray = Array(time).fill(element)
   return elementArray
 }
 console.log(repeat(23,10));

 // Cree una función que filtre las cadenas de un array y devuelva un array que solo 
//contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

let listArray = [1, 2, 3, "x", "y", 10]

function filterArray (listArray){
  let filterList = listArray.filter(entero => typeof entero === "number")

  return filterList
}

console.log(filterArray(listArray));


//Cree una función que tome un array y devuelva la diferencia entre el número
//más grande y más pequeño.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32

let diffMaxMin = [10, 4, 1, 4, -10, -50, 32, 21];

function arrayDiferencia(diffMaxMin){
  let maxNumber = Math.max(...diffMaxMin)
  let minNumber = Math.min(...diffMaxMin)

  return maxNumber - minNumber
}
console.log(arrayDiferencia(diffMaxMin))

//Cree una función que tome un número como argumento y devuelva una matriz 
//de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0

let countdown = 5
function matriz(countdown){
  let matrizReverse = Array.from({length:countdown},(_,index) => countdown - index);
  matrizReverse.push(0)
  return matrizReverse
}

console.log(matriz(countdown))

//Dado un número entero n, crea un array con los números del 1 al n utilizando Array.from().

let n = 5
let arrayN = Array.from({length:n},(_,index) => index + 1)
console.log(arrayN)


//Dado un string str, crea un array de caracteres utilizando Array.from().
const str = "hola"
const strArray = Array.from({length:str.length}, (_,index) => str[index])

console.log(strArray);


//Dado un array de números, crea un nuevo array utilizando Array.from() que contenga solo los números pares del array original.

const arrayNumeros = [1,23,4,5,6,7,8,2,44,62,82,9,31,34]

let numEntero = arrayNumeros.filter(entero => entero%2 ===0)

console.log(numEntero);

//Ejercicio: Escribe una función llamada reverso que tome una cadena como argumento y devuelva la cadena invertida. Por ejemplo, si se le pasa la cadena "Hola, mundo!", la función debería devolver "!odnum ,aloH".

let stringHola = "Hola, mundo!"
function reverse(stringHola){
  let reverseString = Array.from(stringHola).reverse().join("")
  return reverseString
}

console.log(reverse(stringHola))