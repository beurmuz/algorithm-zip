/**
 * [단순 구현]
 * - 핵심은 numbers set을 만드는 게 아닐까 싶다. 못만들면 엄청 복잡해졌을지도..
 */

const [T, ...TC] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (T, TC) => {
  let answer = [];
  const numbers = {
    0: "1110111",
    1: "0010010",
    2: "1011101",
    3: "1011011",
    4: "0111010",
    5: "1101011",
    6: "1101111",
    7: "1110010",
    8: "1111111",
    9: "1111011",
    " ": "0000000", // 빈 전광판 표시
  };

  for (let t = 0; t < T; t++) {
    let [A, B] = TC[t].split(" ");

    // 자릿수를 맞춰준다.
    A = (" ".repeat(5 - A.length) + A).split("");
    B = (" ".repeat(5 - B.length) + B).split("");

    let cnt = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        // numbers[A의 i번째 숫자에 대한 정보 중][j번째 숫자(0 or 1)] 비교
        if (numbers[A[i]][j] != numbers[B[i]][j]) cnt += 1;
      }
    }
    answer.push(cnt);
  }
  return answer.join("\n");
};

console.log(solution(+T, TC));
