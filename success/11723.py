import sys

m = int(sys.stdin.readline())
S = set()

for _ in range(m) :
  calc = sys.stdin.readline().strip().split()

  if len(calc) == 1 :
    if calc[0] == "all" :
      S = set([i for i in range(1, 21)])
    else :
      S = set()

  else :
    oper, x = calc[0], calc[1]
    x = int(x)

    if oper == "add":
      S.add(x)
    elif oper == 'remove':
      S.discard(x)
    elif oper == "check":
      print(1 if x in S else 0)
    elif oper == 'toggle':
      if x in S:
        S.discard(x)
      else:
        S.add(x)

# const BAEAKJOONFILE = "/dev/stdin";
# const VSCODEFILE = "./coding/example.txt";

# 이 문제 js로 불가능하다고 한다 아래 코드도 메모리 초과 파이썬으로 비슷하게 할 수 있다.
# const fs = require("fs");
# const [m, ...cal] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
# const set = new Set();
# for (let i = 0; i < m; i++) {
#   const [oper, x] = cal[i].split(" ");
#   switch (oper) {
#     case "add":
#       if (!set.has(Number(x))) set.add(Number(x));
#       break;
#     case "remove":
#       set.delete(Number(x));
#       break;
#     case "check":
#       if (set.has(Number(x))) {
#         console.log("1");
#       } else {
#         console.log("0");
#       }
#       break;
#     case "toggle":
#       if (set.has(Number(x))) {
#         set.delete(Number(x));
#       }
#       else {
#         set.add(Number(x));
#       }
#       break;
#     case "all":
#       set.clear();
#       set.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9).add(10).add(11).add(12).add(13).add(14).add(15).add(16).add(17).add(18).add(19).add(20);
#       break;
#     case "empty":
#       set.clear();
#       break;
#   }
# }