//Utilize  sempre o Camel Case no JavaScript!

//JavaScript possui tipagem dinamica: Infere os tipos de dados.
//JavaScript possui uma tipagem fraca

var nomeDoProfessor = "Matheus Emanuel"; //string (texto): Utilize sempre em aspas!
var idade = 22; //number
var altura = 1.77;//number
var estudando = true;//bollean (booleano: verdadeiro ou falso)

console.log(nomeDoProfessor, typeof nomeDoProfessor);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semConteudo; //decladrando uma variável;

console.log(semConteudo);

var curso = "Front-end em React",
    topico = "JavaScript Básico I";

console.log(curso, topico);

// !Não utilizar o VAR nos seus códigos JavaScript

let notaDoAluno = 10;
// const mediaDoAluno = 8; Não é permitido

notaDoAluno = 9;
mediaDoAluno = 5;

console.log(notaDoAluno);
console.log(mediaDoAluno);