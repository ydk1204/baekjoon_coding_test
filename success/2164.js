const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = parseInt(fs.readFileSync(VSCODEFILE));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}

const node = new LinkedList();

for (let i = 1; i <= input; i++) {
  node.add(i);
}

while (node.getSize() !== 1) {
  node.removeHead();
  node.add(node.getHead());
  node.removeHead();
}

console.log(node.getHead());

// 시간초과
// const fs = require("fs");
// const input = parseInt(fs.readFileSync(VSCODEFILE));
// const arr = Array(input)
//   .fill()
//   .map((x, i) => i + 1);

// while (arr.length !== 1) {
//   arr.shift();
//   const tmp = arr.shift();
//   arr.push(tmp);
// }

// console.log(arr.join());
