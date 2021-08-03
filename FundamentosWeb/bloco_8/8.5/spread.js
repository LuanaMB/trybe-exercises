// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'uva', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'laranja', 'ninho'];

const fruitSalad = (fruit, additional) => {
  return `${fruit} ${additional}`
};

console.log(fruitSalad(specialFruit, additionalItens));