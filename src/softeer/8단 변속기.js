const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (arr) => {
  let cnt = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] === arr[i] + 1) cnt += 1;
    else if (arr[i + 1] === arr[i] - 1) cnt -= 1;
  }

  if (cnt === 7) return "ascending";
  else if (cnt === -7) return "desecnding";
  else return "mixed";

  return answer;
};

console.log(solution(arr));
