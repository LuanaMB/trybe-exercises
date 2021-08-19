const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = (result, number) => {
  if(number % 2 ===0){
    return result + number
  }
  return result
}
const sumPair = (array) => array.reduce(sumEven, 0)
console.log(sumPair(numbers))