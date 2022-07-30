function tuckIn(arr1, arr2) {
  let arr3=[arr1[0],...arr2,arr1[1]];
  console.log(arr3);
}
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
