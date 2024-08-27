// ----------------------------------------------------------------------
/**
 * 🔍 순 간 이 동 | O | 24.08.27
 */
const [a, b, x, y] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = Number.MAX_SAFE_INTEGER;

// 1. a -> b
answer = Math.min(answer, Math.abs(a - b));

// 2. a -> x -> y -> b
answer = Math.min(answer, Math.abs(a - x) + Math.abs(y - b));

// 3. a -> y -> x -> b
answer = Math.min(answer, Math.abs(a - y) + Math.abs(x - b));
console.log(answer);
