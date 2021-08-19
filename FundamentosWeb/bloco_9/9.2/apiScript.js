const arrayQuadrado = () => {
  return array = [...Array(10)].map(() => Math.floor(Math.random() * 50) + 1)
    .map((element) => Math.pow(element,2));
}

const sumArray = (array) => {
  return array.reduce((acc, crr) => acc + crr,0);
}

const fetchJoke = () => {
 const myPromisse = new Promise((resolve, reject) => {
  const array = arrayQuadrado();
  const sum = sumArray(array);
  console.log(sum);
  (sum < 8000) ? resolve(sum) : reject();
 });
 myPromisse
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => sumArray(array))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};

fetchJoke()
window.onload = () => fetchJoke(); 

