const readlineSync = require('readline-sync');

const array = [1, 2];
const array2 = [3, 4, 5];

// Pergunta ao usuário qual valor deseja inserir
var valor = readlineSync.question("Qual valor do array voce deseja inserir?");
valor = Number(valor)
array.push(valor)
console.log(array);