const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1)
  if(callback(myNumber, number) === true) {
    return 'parabens'
  }
  return 'tente de novo'
};

console.log(lotteryResult(3, numberChecker));