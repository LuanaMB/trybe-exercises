function compareTrue(a, b) {
  if(a===b){
    return true;
  }
  else{
    return false;
  }
}
console.log(compareTrue(5,2))

function calcArea(base, height) {
  let result = (base * height) / 2;
  return (result);
}

function splitSentence(stringVariavel) {
  let resultado = stringVariavel.split(" ");
  return (resultado)
}

function concatName(palavra) {
  let resul = [];
  let primeiro = palavra[0];
  let ultimo = palavra[palavra.length - 1];
  result = [ultimo, primeiro]
  return (result)
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let result = vitoria + ties;
  return (result);
}
console.log(footballPoints(0, 0))

function highestCount(palavra) {
  let maior = palavra[0];
  for (index = 0; index < palavra.length; index += 1) {
    if (palavra[index] > maior) {
      maior += palavra[index];
    }
    let contador = 0;
    for (index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === maior) {
        contador += 1;
      }
    }
    return (contador);
  }
}
console.log(highestCount( [0, 4, 4, 4, 9, 2, 1]))
//7)
function catAndMouse (mouse, cat1, cat2){
  let DistanciaCat1= Math.abs(mouse - cat1);
  let DistanciaCat2= Math.abs(mouse -cat2);
  if(DistanciaCat1>DistanciaCat2){
    return 'cat1'
  }
  else if(DistanciaCat1<DistanciaCat2){
    return 'cat2'
  }
  else{
    return 'os gatos trombam e o rato foge'
  }
}
//8)
function fizzBuzz(vetor){
  let vetorDecodificado =vetor;
  let fizz= "fizz";
  let fizBuz= "fizzBuzz";
  let buzz= "Buzz";
  let bug= "bug!"
  for(index=0; index<vetor.length; index +=1){
    if(vetorDecodificado[index]%3===0 && vetorDecodificado[index]%5===0){
      vetorDecodificado[index]= fizBuz;
    }
    else if(vetorDecodificado[index]%3===0){
      vetorDecodificado[index] = fizz;
    }
    else if(vetorDecodificado[index]%5===0){
      vetorDecodificado[index]= buzz;
    }
    else{
      vetorDecodificado[index]= bug;
    }
  } 
  return vetorDecodificado;
}
console.log(fizzBuzz([9, 25]))
//9)
