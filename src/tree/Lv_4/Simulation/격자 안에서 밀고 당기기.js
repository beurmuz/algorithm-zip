// ----------------------------------------------------------------------
/**
 * 🔍 컨베이어 벨트 | O | 25.02.04 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, T] = inputs[0].split(" ").map(Number);
const arr1 = inputs[1].trim().split(" ").map(Number);
const arr2 = inputs[2].trim().split(" ").map(Number);

for (let t = 0; t < T; t++) {
  let tmp1 = arr1[N - 1];
  let tmp2 = arr2[N - 1];

  // 1. arr1을 오른쪽으로 이동
  for (let i = N - 1; i > 0; i--) {
    arr1[i] = arr1[i - 1];
  }

  // 2. arr2를 왼쪽으로 이동
  for (let i = N - 1; i > 0; i--) {
    arr2[i] = arr2[i - 1];
  }

  arr1[0] = tmp2;
  arr2[0] = tmp1;
}

console.log(arr1.join(" "));
console.log(arr2.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 삼각형 컨베이어 벨트 | O | 25.02.05 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, T] = inputs[0].split(" ").map(Number);
const arr1 = inputs[1].trim().split(" ").map(Number);
const arr2 = inputs[2].trim().split(" ").map(Number);
const arr3 = inputs[3].trim().split(" ").map(Number);

for (let t = 0; t < T; t++) {
  let tmp1 = arr1[N - 1];
  let tmp2 = arr2[N - 1];
  let tmp3 = arr3[N - 1];

  // 각 행별 숫자 이동
  for (let i = N - 1; i > 0; i--) {
    arr1[i] = arr1[i - 1];
    arr2[i] = arr2[i - 1];
    arr3[i] = arr3[i - 1];
  }

  arr1[0] = tmp3;
  arr2[0] = tmp1;
  arr3[0] = tmp2;
}

console.log(arr1.join(" "));
console.log(arr2.join(" "));
console.log(arr3.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 1차원 바람 | O | 25.02.11 🔍
 * - ✅✅✅ buildings에서 각 줄을 split() 하기 전에 반드시 trim()을 해주어야 한다. ✅✅✅
 *   -> 왜인진 모르겠지만 계속 공백?이 추가되어 연산이 이루어짐 ㅠ
 * - 맞았지만 다시 한번 풀어보자!
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, Q] = inputs[0].split(" ").map(Number);
const buildings = inputs
  .slice(1, N + 1)
  .map((line) => line.trim().split(" ").map(Number));
let windInfos = inputs.slice(N + 1).map((line) => line.split(" "));

// L: 왼쪽에서 오른쪽으로 한칸 씩 밀림
function windLtoR(row) {
  let tmp = buildings[row][M - 1];

  for (let i = M - 1; i > 0; i--) {
    // 앞에서 가져와서 저장
    buildings[row][i] = buildings[row][i - 1];
  }
  buildings[row][0] = tmp;
}

// R: 오른쪽에서 왼쪽으로 한칸 씩 밀림
function windRtoL(row) {
  let tmp = buildings[row][0];

  for (let i = 0; i < M - 1; i++) {
    buildings[row][i] = buildings[row][i + 1];
  }
  buildings[row][M - 1] = tmp;
}

// 두 row의 각 col이 일치하는지 검사
function checkSameNum(row1, row2) {
  for (let i = 0; i < M; i++) {
    if (buildings[row1][i] === buildings[row2][i]) return true;
  }
  return false;
}

// 전파하기. 현재 row에서의 전파 방향을 return 한다.
function spreadWind(row, pos) {
  if (pos === "L") {
    // 반대 방향으로 전파
    windRtoL(row);
    return "R";
  } else if (pos === "R") {
    // 반대 방향으로 전파
    windLtoR(row);
    return "L";
  }
}

// 시작) 해당 열을 바람이 불어오는 방향에 따라 오른쪽, 왼쪽으로 민다.
function main(windRow, windPos) {
  // 1. windRow를 widPos에 맞게 왼쪽 or 오른쪽으로 민다.
  if (windPos === "L") windLtoR(windRow);
  else if (windPos === "R") windRtoL(windRow);

  // 2. 전파
  //  2-1) 위쪽 전파
  if (windRow > 0 && checkSameNum(windRow - 1, windRow)) {
    // 끝이 아니고 열에 겹치는게 하나라도 있으면, 위쪽으로 쭉 전파
    let prevPos = windPos;
    let nowRow = windRow - 1;

    while (nowRow >= 0) {
      prevPos = spreadWind(nowRow, prevPos);

      // 다음 전파 전, nowRow의 위에 더이상 row가 없거나 같은 열에 일치하는 숫자가 하나도 없다면 종료
      if (nowRow - 1 === -1 || !checkSameNum(nowRow - 1, nowRow)) break;

      // 있다면
      nowRow--; // nowRow를 바로 위에 있는 row로 바꿔줌
    }
  }

  //  2-2) 아래쪽 전파
  if (windRow < N - 1 && checkSameNum(windRow, windRow + 1)) {
    // 끝이 아니고 열에 겹치는게 하나라도 있다면, 아래로 쭉 전파
    let prevPos = windPos;
    let nowRow = windRow + 1;

    while (nowRow <= N - 1) {
      prevPos = spreadWind(nowRow, prevPos);

      if (nowRow + 1 === N || !checkSameNum(nowRow, nowRow + 1)) break;

      nowRow++;
    }
  }
}

// 총 Q번 민다.
windInfos.forEach((windInfo, i) => {
  let [windRowInfo, windPosInfo] = windInfo;
  main(Number(windRowInfo - 1), windPosInfo);
});

// 종료) buildings를 출력
buildings.forEach((line) => {
  console.log(...line);
});
