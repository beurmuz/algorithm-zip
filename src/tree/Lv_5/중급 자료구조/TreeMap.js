// ----------------------------------------------------------------------
/**
 * 🔍 treemap 기본 | O | 25.01.20
 */
const SortedMap = require("collections/sorted-map");

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);

const sortedmap = new SortedMap();

for (let i = 1; i < inputs.length; i++) {
  let [command, key, value] = inputs[i].split(" ");
  key = Number(key);
  value = Number(value);

  if (command === "add") {
    sortedmap.set(key, value);
  } else if (command === "remove") {
    sortedmap.delete(key);
  } else if (command === "find") {
    if (sortedmap.has(key)) console.log(sortedmap.get(key));
    else console.log("None");
  } else if (command === "print_list") {
    if (sortedmap.length < 1) console.log("None");
    else {
      let answer = [];
      for (let [k, v] of sortedmap.entries()) {
        answer.push(v);
      }
      console.log(answer.join(" "));
    }
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 비율 구하기 | O | 25.01.20
 */
const SortedMap = require("collections/sorted-map");

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);

const sortedmap = new SortedMap();

for (let i = 1; i < inputs.length; i++) {
  if (sortedmap.has(inputs[i]))
    sortedmap.set(inputs[i], sortedmap.get(inputs[i]) + 1);
  else sortedmap.set(inputs[i], 1);
}

for (let [key, value] of sortedmap.entries()) {
  // 해당 문자열이 차지하는 비율을 백분율로 표현하기 (단, 소수점 4째자리까지 반올림할것)
  console.log(key, ((value / N) * 100).toFixed(4));
}
