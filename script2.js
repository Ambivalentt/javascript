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