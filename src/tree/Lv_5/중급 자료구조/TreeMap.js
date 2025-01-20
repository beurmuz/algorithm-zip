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
