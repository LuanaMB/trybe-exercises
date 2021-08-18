const sumAllNumbers = array => {
  let soma =0
  for(i=0; i<array.length; i+=1){
    soma += array[i];
  }
  return soma
}

module.exports = sumAllNumbers;