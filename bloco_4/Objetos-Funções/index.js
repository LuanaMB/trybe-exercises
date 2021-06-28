let player= {
  nome: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2, 
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log('A jogadora ' + player.nome + ' foi eleita a melhor do mundo por '  + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

let nomes = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' ,
};
for(let index in nomes){
  console.log('Olá ' + nomes[index]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for(let index in car){
  console.log(index, car[index]);
}

