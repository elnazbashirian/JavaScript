function filterArray(arr) {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbers.push(arr[i]);
    }
  }
  return numbers;
}
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
