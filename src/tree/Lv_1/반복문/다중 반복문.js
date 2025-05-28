// ----------------------------------------------------------------------
/**
 * 🔍 구구단 | O | 25.05.28
 */
const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = 1; i <= 4; i++) {
  let line = [];
  for (let j = B; j >= A; j--) {
    line.push(`${j} * ${i * 2} = ${j * i * 2}`);
    line.push("/");
  }
  line.pop();
  console.log(line.join(" "));
}
