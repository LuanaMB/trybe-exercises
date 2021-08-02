const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

/* const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0; 
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionLet = action(rightAnswers[index], studentAnswers[index])
    contador += actionLet
  }
  return `Resultado final: ${contador} corretas`;
};
  */

function repeat (respostasCertas, respostasAlunos, callback){
  let contador = 0;
  respostasCertas.forEach((resposta, i) => {
    let action = callback(resposta, respostasAlunos[i])
    contador += action;
  })
  return `Resultado final: ${contador} corretas`;
}

const condicao = (parametro1, parametro2) => {
  if (parametro1 === parametro2) {
    return 1;
  } else if (parametro2 === "N.A") {
    return 0;
  }
  return -0.5;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, condicao))


