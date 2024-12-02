const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const pari = [];
for (let num of nums){
  if (!(num % 2)){
    pari.push(num);
  }
}

console.log(pari);
