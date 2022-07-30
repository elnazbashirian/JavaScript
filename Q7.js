let myMap = function (arr, mapfunc) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = mapfunc(arr[i]);
  }
  return arr;
};
let myFilter = function (arr, filterFunc) {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (filterFunc(arr[i])) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
};
let myreduce = function (arr, reduceFunc) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i += 2) {
    sum += reduceFunc(arr[i], arr[i + 1]);
  }
  return sum;
};
console.log(
  myMap([1, 3, 2, 6], (item) => {
    return item * 2;
  })
);
console.log(
  myFilter([1, 3, 2, 6], (item) => {
    return item > 3;
  })
);
console.log(
  myreduce([1, 2, 3, 4], (a, b) => {
    return a + b;
  })
);
