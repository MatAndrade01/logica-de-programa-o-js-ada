const prompt = require('readline-sync')

const idade = prompt.question("Qual a sua idade ?");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

//Coerção Explícita (Coversão Manual).

console.log(Number("X")); //Nan: Not a Number.

console.log(String(10), typeof String(10));

console.log(Boolean(0));

//Coerção Implícita.

console.log(1 + '1');
console.log(5 + '10');
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');

let n = 1 + '1';//'11' String.

n = n -1;//11 - 1 = 10 Number.

console.log(n);

console.log(2 + 3 + 4 + '5');// '95' String.

console.log('5' + 2 + 3 + 4);// '5234' String.

console.log('10' - '4' - '3' - 2 + '5');//'15' String