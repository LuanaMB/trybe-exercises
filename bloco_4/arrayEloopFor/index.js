let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index=0;index < numbers.length; index +=1 ){
  console.log(numbers[index]);
}
//2)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
for(let i=0;i<numbers.length;i+=1){
  soma += numbers[i]
}
console.log(soma)
//3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma= 0;
for(let i=0;i<numbers.length;i+=1){
  soma += numbers[i]
}
console.log(soma/numbers.length)
//4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma= 0;
for(let i=0;i<numbers.length;i+=1){
  soma += numbers[i]
}
if(soma/numbers.length > 20){
  console.log('a aŕea é maior que 20')
}
else {
  console.log('valor menor ou igual a 20"')
}
//5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let MaiorValor=numbers[0];
for(let i=0;i<numbers.length;i+=1){
  if(numbers[i]>=MaiorValor){
    MaiorValor=numbers[i];
  }
}  
console.log(MaiorValor)
//6
let numbers = [2, 2, 4, 6, 70, 8, 100, 2, 36, 6];
let CountNumbers=0;
for(let i=0;i<numbers.length;i+=1){
  if(numbers[i]%2!=0){
    CountNumbers += 1; 
  }  
}    
if(CountNumbers===0){
  console.log('nenhum valor ímpar encontrado');
}
else{
  console.log(CountNumbers);
}
//7
let numbers = [0, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let MenorValor=numbers[0];
for(let i=0;i<numbers.length;i+=1){
  if(numbers[i]<=MenorValor){
    MenorValor=numbers[i];
  }
}  
console.log(MenorValor)
//8  
let resultado = [];
let soma=0;
for(let index=0;index<25; index +=1){
  soma= index + 1;
  resultado[index] = soma;
}
/*Resposta do gabarito MELHOR!
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);
*/
console.log(resultado)
//9
let resultado = [];
let soma=0
let div=0;
for(let index=0;index<25; index +=1){
  soma= index + 1;
  resultado[index] = soma/2;
}
console.log(resultado)
