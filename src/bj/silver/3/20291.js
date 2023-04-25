const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const fileMap = new Map();
  inputs.forEach((file) => {
    let [name, ex] = file.split(".");
    if (fileMap.has(ex)) fileMap.set(ex, fileMap.get(ex) + 1);
    else fileMap.set(ex, 1);
  });
  let sorted = [];
  for (let [key, value] of fileMap) {
    sorted.push(key + " " + value);
  }
  return sorted.sort().join("\n");
};

console.log(solution(+n, inputs));
