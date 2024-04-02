let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((v) => +v));

const solution = (inputs) => {
  const [N, M] = inputs[0];
  const rangeN = inputs.slice(1, N + 1);
  const rangeM = inputs.slice(N + 1);

  let diffList = [];

  while (true) {
    if (!rangeN.length || !rangeM.length) break;

    let diff = rangeM[0][0] - rangeN[0][0]; // 구간의 길이 차이를 구한다.
    if (diff > 0) {
      diffList.push(rangeM[0][1] - rangeN[0][1]);
      rangeN.shift();
      rangeM[0][0] = diff;
    } else if (diff < 0) {
      diffList.push(rangeM[0][1] - rangeN[0][1]);
      rangeM.shift();
      rangeN[0][0] = -diff;
    } else {
      diffList.push(rangeM[0][1] - rangeN[0][1]);
      rangeM.shift();
      rangeN.shift();
    }
  }
  if (Math.max(...diffList) >= 0) {
    return Math.max(...diffList);
  } else {
    return 0;
  }
};

console.log(solution(inputs));
