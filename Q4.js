let arr1 = ["banana", "orange", "cherry"];
function reverseArray(arr1) {
  let length = arr1.length;
  let arr2 = [];
  for (let i = length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }
  return arr2;
}
function reverseArrayInPlace(aar1) {
  for (let i = 0; i <= arr1.length; i++) {
    arr1.splice(i, 0, arr1.pop());
  }
  return arr1;
}
console.log(reverseArray(arr1));
console.log(reverseArrayInPlace(arr1));
