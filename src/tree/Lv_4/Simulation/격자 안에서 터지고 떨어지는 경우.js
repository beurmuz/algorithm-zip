// ----------------------------------------------------------------------
/**
 * 🔍 1차원 젠가 | O | 25.02.17 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let blocks = inputs.slice(1, N + 1).map(Number);
const removeInfos = inputs
  .slice(N + 1)
  .map((line) => line.split(" ").map(Number));

let tmp;
removeInfos.forEach(([x, y]) => {
  tmp = [];
  // 1. 범위 내 숫자들을 제외하고 tmp에 push한다.
  for (let i = 0; i < blocks.length; i++) {
    if (x - 1 <= i && i <= y - 1) continue;
    tmp.push(blocks[i]);
  }
  // 2. tmp를 다시 blocks에 옮겨 저장한다.
  blocks = [];
  for (let i = 0; i < tmp.length; i++) {
    blocks.push(tmp[i]);
  }
});

if (blocks.length === 0) {
  console.log(0);
} else {
  console.log(blocks.length);
  blocks.forEach((v) => console.log(v));
}
