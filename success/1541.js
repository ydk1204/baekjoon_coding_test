const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let input = fs.readFileSync(VSCODEFILE).toString().split("-");
// 10 + 20 - 30 + 40 - 50 이라고 가정할 때, -가 붙은 숫자를 시작으로 뒤에가 가장 값이 클 때 괄호를 닫아야 값이 가장 작다
// +와 -연산만 존재함으로 가장 값이 클 때는 +연산이 이어져서 나오는 부분이다(다음 -를 만나기 전까지)
// input = ['10+20', '30+40', '50']

let answer = input.reduce((total, item, idx) => {
  // split : 각각 배열은 문자열로 되어있음, + 연산자가 있는 것도 있음
  // map : + 기준으로 나눠 배열로 만들고 숫자로 만든다.
  // reduce : 값을 누적하여 합해준다 > 합한 값이 나오도록 한다.
  // sum = [30, 70, 50]이 됨

  let sum = item
    .split("+")
    .map((a) => +a)
    .reduce((total, cur) => total + cur);
  
  // 맨 처음은 idx가 0이기 때문에 total + sum이 되는데 total = 0이 초기값이니 sum의 값이 됨
  
  return idx === 0 ? total + sum : total - sum;
}, 0);

console.log(answer);