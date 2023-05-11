// Exercício 1
const myList = [5, 2, 3];

const swap = ([a, b, c]) => [c, b, a];

console.log(swap(myList));

// Exercício 2
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({ name, brand, year });

console.log(toObject(palio));

// Exercício 3
const greet = (personName, greet = 'Hi') => `${greet} ${personName}`;
// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// Exercício 4
// const student1 = {
//   name: `Claudia`,
//   lastName: `Farias`,
//   age: 23,
// }

// const student2 = {
//   name: `Vitor`,
//   age: 20,
// }

// const getLastName = (infoObj) => {
//   const { lastName = 'lastName não preenchido' } = infoObj;
//   return lastName;
// };

// console.log(getLastName(student1));
// console.log(getLastName(student2));

// Exercício 5
const moreStudents = [
  'Chris',
  ['Ahmad', 'Antigoni'],
  ['Toby', 'Sam']
];

const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);