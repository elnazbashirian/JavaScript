let a = "Banana";
let b = "a";
function countBs(a) {
  let count = 0;
  let arr = [];
  arr = a.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "B") count++;
  }
  console.log(count);
}
function countChar(a, b) {
  let count = 0;
  let arr = [];
  arr = a.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == b) count++;
  }
  console.log(count);
}
countBs(a);
countChar(a, b);
