let arr = [];
let answer = [];
let num = 0;

for (let i = 1; i <= 10000; i++) {
  num += i;
  let strNum = String(i);
  for (let j = 0; j < strNum.length; j++) num += Number(strNum[j]);
  arr.push(num);
  num = 0;
}

for (let k = 1; k <= 10000; k++) {
  if (arr.indexOf(k) === -1) answer += k + "\n";
}

console.log(answer);
