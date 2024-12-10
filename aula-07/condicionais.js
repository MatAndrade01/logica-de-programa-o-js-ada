const prompt = require('readline-sync');

const idade = Number(prompt.question("Qual a sua idade?"));

// const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else;

if (idade >= 18) {
    // Faça alguma coisa...
    console.log("Voce eh maior de idade");
} else {
    console.log("Voce eh menor de idade");
};

const mediaDoAluno = 4.99999;

// Media >= 7 => Aprovado;
// Media < 7 e Media >= 5 => Prova final;
// Media < 5 => Reprovado;

if (mediaDoAluno >= 7) {
    console.log("Aprovado!");
    console.log("Parabens! 😁👍")
} else if (mediaDoAluno >= 5) {
    console.log("Prova Final");
} else {
    console.log("Reprovado!");
};

// 1. Preciso ser maior de idade.
// 2. Preciso ter uma CNH.

const idadeDaPessoa = 18;
const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
    console.log("Voce pode dirigir");
} else {
    console.log("Voce nao pode dirgir");
};