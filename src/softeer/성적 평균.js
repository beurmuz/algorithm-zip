/**
 * [누적합]
 * - slice를 사용하지 않기 위해 누적합을 이용해보았지만 10개의 테케 중 3개가 시간초과가 발생했다.
 */

let [input, scores, ...terms] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, scores, terms) => {
  const [N, K] = input.split(" ").map((v) => +v);
  scores = scores.split(" ").map((v) => +v);
  let total = scores.reduce((acc, v) => acc + v, 0);
  let accScores = Array.from({ length: N + 1 }, () => 0);

  // 누적합을 이용한 방법
  for (let i = 0; i < N; i++) {
    accScores[i + 1] = accScores[i] + scores[i];
  }

  for (let i = 0; i < terms.length; i++) {
    let [start, end] = terms[i].split(" ").map((v) => +v); // [구간 시작, 구간 끝]
    let d = end - start + 1;
    let avg = ((accScores[end] - accScores[start - 1]) / d).toFixed(2);
    console.log(avg);
  }
};

solution(input, scores, terms);