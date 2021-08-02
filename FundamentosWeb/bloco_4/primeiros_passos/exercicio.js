let a= 10;
let b= 20;
console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));
//2)
let a= 50;
let b= 20;
if(a>b){
  console.log(a)
}
else{
  console.log(b)
}
//3)
let a= 30;
let b= 21;
let c= 234;
if(a>b && a>c){
  console.log(a + ' é o maior número');
}
else if(b>c && b>a){
  console.log(b + ' é o maior número');
}
else{
  console.log(c + ' é o maior número');
}
//4)
let numero=-5;
if(numero>0){
  console.log('positivo');
}
else if(numero<0){
  console.log('negativo');
}
else{
  console.log('esse número é o 0')
}
//5)
let a= -50;
let b= 40;
let c= 20;
if(a>0 && b>0 && c>0){
  if(a+b+c==180){
    console.log('true')
  }
  else{
    console.log('false')
  }
}
else{
  console.log('os valores dos angulos precisam ser positivos')
}
//6)
let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
//7)
let nota= 69;
if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}
//8)
let a= 45;
let b= 41;
let c= 23;
if(a%2==0 || b%2==0 || c%2==0){
  console.log('true');
}
else{
  console.log('false');
}
//9)
let a= 44;
let b= 40;
let c= 20;
if(a%2!==0 || b%2!==0 || c%2!==0){
  console.log('true');
}
else{
  console.log('false');
}
//10)
let custo= 1;
let valorVenda=3;
let valorTotal=(1.2*custo);
if(custo && valorVenda==0){
  console.log('digite um valor positivo');
}
else{
  let lucro=((valorVenda-valorTotal)*1000);
  console.log('Seu lucro nesse mês foi de ' + lucro);
}
//11)

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
