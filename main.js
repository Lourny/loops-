let str1 = "";
for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    str1 += "*";
  }
  str1 += "\n";
}


let str2 = "";
for (let c = 1; c <= 5; c++) {
  for (let d = 5; d > c; d--) {
    str2 += " ";
  }
  for (let e = 1; e <= c; e++) {
    str2 += "*";
  }
  str2 += "\n";
}
console.log(str2);

let str3 = "";
for (let f = 1; f <= 5; f++) {
  for (let g = 5; g >= f; g--) {
    str3 += "*";
  }
  str3 += "\n";
}
console.log(str3);
console.log(str1);

let str4 = "";
for (let h = 1; h <= 5; h++) {
  for (let i = 1; i < h; i++) {
    str4 += " ";
  }
  for (let j = 5; j >= h; j--) {
    str4 += "*";
  }
  str4 += "\n";
}
console.log(str4);
console.log(str2);
console.log(str3);
console.log(str1);
console.log(str4);
