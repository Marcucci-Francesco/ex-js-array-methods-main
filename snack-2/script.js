const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const peopleName = people.map(({name}) => `'${name}'`);
const peopleList = peopleName.join(',');

console.log(peopleList);

