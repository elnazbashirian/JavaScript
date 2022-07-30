function canNest(arr1, arr2) {
  let min1 = arr1[arr1.length - 1];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < min1) {
      min1 = arr1[i];
    }
  }
  let max1 = arr1[arr1.length - 1];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max1) {
      max1 = arr1[i];
    }
  }

  let min2 = arr2[arr2.length - 1];
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] < min2) {
      min2 = arr2[i];
    }
  }
  let max2 = arr2[arr2.length - 1];
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] > max2) {
      max2 = arr2[i];
    }
  }
  if (min1 > min2) {
    if (max1 < max2) {
      return true;
    }
  } else return false;
}
console.log(canNest([1, 2, 3, 4], [2, 3]));
