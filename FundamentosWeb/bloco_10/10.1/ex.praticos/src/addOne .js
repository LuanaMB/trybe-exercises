const addOne = (array) => {
  let newAraay = [];
  for (let i = 0; i < array.length; i += 1) {
    newAraay.push(array[i]+1)
  }
  return newAraay
};
module.exports = addOne;