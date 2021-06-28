//1)
function verificaPalindrome(word){  
  let ultimaLetra = word.lenght -1;    
  for(let index =0; index < word.lenght ; index += 1){
    if(word[index]===word[ultimaLetra]){      
      ultimaLetra-=1;
      return true;
    }    
    else{
      return false;
    }
  }   
}
console.log(verificaPalindrome('arara'))
//2)
function MaiorNumero(numbers){  
  let MaiorValor=numbers[0];
  let indiceMaior=0;
  for(let i=0;i<numbers.length;i+=1){
    if(numbers[i]>MaiorValor){
      indiceMaior= i;
    }
  }
  return indiceMaior;
}
console.log(MaiorNumero([2, 3, 6, 7, 10, 1]))
//3)
function MaiorNumero(numbers){  
  let MenorValor=numbers[0];
  let indiceMenor=0;
  for(let i=0;i<numbers.length;i+=1){
    if(numbers[i]<MenorValor){
      indiceMenor= i;
    }
  }
  return indiceMenor;
}
console.log(MaiorNumero([2, 4, 6, 7, 10, 0, -3]))
//4)
function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
//6)
function Somatorio(numero){
  let somaDosNumeros=0;
  for(index=1; index<=numero; index +=1){
    somaDosNumeros = somaDosNumeros + index;
  }
  return somaDosNumeros;
}
console.log(Somatorio(5));

