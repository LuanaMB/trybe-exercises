/* //1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};
testingScope(true);
//2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const arraySort = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};
console.log(arraySort(oddsAndEvens));
///exemplos parte 2
//1)
const fatorial = (number) => {
  let valor = number;
  for (let index = 1; index < number; index += 1) {
    valor = valor * (number - index);
  }
  return valor;
};

console.log(fatorial(5));
//2)

const longestWord = (word) => {
  let wordSplit = word.split(" ");
  let result = "";
  let countLenght = 0;

  for (i = 0; i < wordSplit.length; i += 1) {
    if (wordSplit[i].length > countLenght) {
      result = wordSplit[i];
    }
  }
  return result;
};
console.log(longestWord("luana monero braga luanamonerobraga"));

const btnInput = document.querySelector("#btn-input");
const pInput = document.querySelector("#value-btn");
let clickCount = 0;

let clicks = 0;
btnInput.addEventListener('click', () => pInput.innerText = clicks+=1)

 */


const palavra = parametro => {
  let frase= "Tryber x aqui!";
  return frase.replace('x', parametro)
} 

const fraseFinal = array =>{
  let variavel = palavra('luana')
  let arrayOrdenada = array.sort()
  let arrayVazio = ''
  return `${variavel} minhas principasi habilidades são:
  ${arrayOrdenada}`
}

console.log(fraseFinal(['sql','react','javascrip','html']))