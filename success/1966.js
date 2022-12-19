const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const [T, ...doc] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
const answer = [];

for (let i = 0; i < doc.length; i = i + 2) {
  const [N, M] = doc[i].toString().split(" ");
  const docImport = doc[i + 1]
    .toString()
    .split(" ")
    .map((x) => +x);

  const key = parseInt(M);
  let max = Math.max(...docImport);
  let cnt = 0;
  let j = 0;

  while (true) {
    if (docImport[j] === max) {
      docImport.splice(j, 1, 0);
      cnt++;
      max = Math.max(...docImport);
      if (j === key) {
        answer.push(cnt);
        break;
      }
    } else if (j === docImport.length - 1) j = 0;
    else j++;
  }
}

console.log(answer.join("\n"));
