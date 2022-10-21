let count = 0;
let num = 23;

for (let i = 1; i <= num-1; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log("yes");
} else {
  console.log("no");
}