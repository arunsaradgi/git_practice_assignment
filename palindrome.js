let str = "affa";

let rev_str = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev_str += str[i];
}

if (str == rev_str) {
  cnsole.log("yes");
} else {
  console.log("no");
}
