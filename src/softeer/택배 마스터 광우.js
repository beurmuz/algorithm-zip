/**
 * [구현, 브루트포스, 재귀]
 *
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [N, M, K] = inputs[0].split(" ").map((v) => +v);
  const rails = inputs[1].split(" ").map((v) => +v);
  let answer = Number.MAX_SAFE_INTEGER;

  function findAnswer(arr) {
    let total = 0;
    let index = 0;

    for (let k = 0; k < K; k++) {
      let bucket = 0;
      // 기존 바구니의 값에 arr[index]를 더했을 때 무게 M을 넘어가지 않는 동안 반복
      while (bucket + arr[index] <= M) {
        bucket += arr[index];
        // index 갱신
        index = (index + 1) % N;
      }
      total += bucket;
    }
    answer = Math.min(answer, total);
  }

  function changeOrder(arr, idx) {
    console.log(...arr);
    if (idx === N - 1) {
      findAnswer(arr);
      return;
    }

    for (let i = idx; i < arr.length; i++) {
      [arr[idx], arr[i]] = [arr[i], arr[idx]];
      changeOrder(arr, idx + 1);
      [arr[idx], arr[i]] = [arr[i], arr[idx]]; // 백트래킹
    }
  }
  changeOrder(rails, 0);

  return answer;
};

console.log(solution(inputs));
