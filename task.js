const num = [1, 5, 5, 7, 68, 7, 2, 9, 3, 19, 3, 92];
let max = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

console.log(max);
