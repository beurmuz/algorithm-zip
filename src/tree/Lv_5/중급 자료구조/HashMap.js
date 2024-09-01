// ----------------------------------------------------------------------
/**
 * 🔍 hashmap 기본 | O | 24.09.01
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const commands = inputs.slice(1);

const hashmap = new Map();
commands.forEach((line) => {
  let [command, key, value] = line.split(" ");
  key = Number(key);
  value = Number(value);

  if (command === "add") {
    hashmap.set(key, value);
  } else if (command === "find") {
    if (hashmap.has(key)) console.log(hashmap.get(key));
    else console.log("None");
  } else if (command === "remove") {
    hashmap.delete(key);
  }
});

// ----------------------------------------------------------------------
/**
 * 🔍 숫자 등장 횟수 | O | 24.09.01
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const infos = inputs[1].split(" ").map(Number);
const finds = inputs[2].split(" ").map(Number);

const map = new Map();
infos.forEach((num) => {
  if (map.has(num)) map.set(num, map.get(num) + 1);
  else map.set(num, 1);
});

let answer = finds.map((num) => {
  if (map.has(num)) return map.get(num);
  else return 0;
});

console.log(answer.join(" "));
