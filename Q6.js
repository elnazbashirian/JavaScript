let myEvery = function (arr, Function) {
  for (let i = 0; i < arr.length; i++) {
    if (Function(arr[i]) == false) {
      return false;
    }
  }
  return true;
};
let arr = [10, 11, 12,9];
console.log(myEvery(arr, (item) => item >= 10));
console.log(myEvery([1, 3, 2, 6], (item) => item >= 2 ));
