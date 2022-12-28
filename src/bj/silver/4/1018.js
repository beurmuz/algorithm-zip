"use stirct";

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(inputs) {
  const [N, M] = inputs
    .shift()
    .split(" ")
    .map((v) => +v);
  let board = inputs.map((v) => v.split(""));

  // 시작이 W인지 B인지에 따라 만들어 놓은 8x8 체스판 데이터
  const white = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];
  const black = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  let answer = 90; // 8x8의 총 칸수 이상의 값을 임의로 넣는다.
  // board를 순회하면서 다시 칠해야하는 정사각형의 최솟값을 찾는다.
  for (let i = 0; i <= N - 8; i++) {
    // 8줄
    for (let j = 0; j <= M - 8; j++) {
      // 8칸 탐색하기
      let min = check(j, i);
      answer = Math.min(answer, min);
    }
  }

  function check(x, y) {
    let checkWhite = 0;
    let checkBlack = 0;

    for (let i = y; i < y + 8; i++) {
      // y번째 줄 부터 y+7번째 줄까지 탐색
      for (let j = x; j < x + 8; j++) {
        // x번째 칸부터 x+7번째 칸까지 탐색
        if (board[i][j] !== white[i - y][j - x]) checkWhite++; // white 값과 다르면 white 개수 ++
        if (board[i][j] !== black[i - y][j - x]) checkBlack++; // black 값과 다르면 black 개수 ++
      }
    }
    // checkWhite의 개수와 checkBlack의 개수를 비교하여 최솟값을 min에 넣어준다.
    let min = Math.min(checkWhite, checkBlack);
    return min;
  }
  return answer;
}
console.log(solution(inputs));
