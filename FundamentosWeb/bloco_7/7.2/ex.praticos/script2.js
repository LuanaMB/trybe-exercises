const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const turno = (objeto, key, value) => {
  return (objeto[key] = value);
};

const keys = (objeto) => {
  let key = Object.keys(objeto);
  return key;
};

const tamanhoObjeto = (objeto) => {
  return Object.keys(objeto).length;
};

const valoresObjeto = (objeto) => {
  return Object.values(objeto);
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const numeroDeEstudantes = (objeto) => {
  let soma = 0;
  let keys = Object.keys(objeto);
  for (let index in keys) {
    soma += objeto[keys[index]].numeroEstudantes;
  }
  return soma;
};

const posicaoValor = (objeto, posicao) => Object.values(objeto)[posicao];


console.log(posicaoValor(lesson3, 1));
