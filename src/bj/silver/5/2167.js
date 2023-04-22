const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => +v);
  const board = [];
  let index = 1;
  for (let i = index; i < index + n; i++) {
    board.push(input[i].split(" ").map((v) => +v));
  }
  index = index + n;

  const getSum = (x1, y1, x2, y2) => {
    let sum = 0;
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        sum += board[i][j];
      }
    }
    return sum;
  };

  const k = +input[index++];

  let answer = [];
  for (let i = index; i < index + k; i++) {
    let [x1, y1, x2, y2] = input[i].split(" ").map((v) => +v);
    answer.push(getSum(x1 - 1, y1 - 1, x2 - 1, y2 - 1));
  }
  return answer.join("\n");
};

console.log(solution(input));
