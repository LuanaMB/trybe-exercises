const findTheNeedle = (array, word) => {
  for (i = 0; i < array.length; i += 1) {
    if (array[i] === word) {
      return i;
  }
  }
  return -1
};

module.exports = findTheNeedle;