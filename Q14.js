function makePlusFunction(a) {
  return function plus(b) {
    let result = a + b;
    return result;
  }
}
const plusFive = makePlusFunction(5);
console.log(plusFive(2));
