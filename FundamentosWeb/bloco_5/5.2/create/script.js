let pai = document.getElementById('pai');
const irmaoelemento = document.createElement('div');
irmaoelemento.id='irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoelemento);

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('div');
filhoElementoOndeVoceEsta.id='filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

let primeiroFilhoDoFilho= document.getElementById('primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho= document.createElement('div');
filhoPrimeiroFilhoDoFilho.id='filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoElementoOndeVoceEsta);

const terceirofilho= filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceirofilho);