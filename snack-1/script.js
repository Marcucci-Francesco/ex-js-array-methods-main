const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const nomi = names.map((name) => `'${name}'`);
const name = nomi.join(',');

console.log(name);
