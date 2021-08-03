//exemplo 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao));


//exemplo 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]

console.log(comida, animal, bebida); 


//exemplo 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];