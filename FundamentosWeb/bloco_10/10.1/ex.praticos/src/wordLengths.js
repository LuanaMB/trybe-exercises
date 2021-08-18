const wordLengths = array => {
  let newArray =[]
  for(let index =0; index<array.length; index+=1){
    newArray.push(array[index].length)
  }
  return newArray
}

module.exports = wordLengths;