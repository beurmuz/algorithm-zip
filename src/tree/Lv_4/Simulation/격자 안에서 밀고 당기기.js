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

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️2차원 바람⭐️ | △ | 25.02.12-13 🔍
 * - ✅ 시계 방향으로 테두리 회전하기
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, Q] = inputs[0].split(" ").map(Number);
const arr = inputs
  .slice(1, 1 + N)
  .map((line) => line.trim().split(" ").map(Number));
const windInfos = inputs.slice(1 + N).map((line) =>
  line
    .trim()
    .split(" ")
    .map((v) => Number(v) - 1)
);
const tmpArr = Array.from({ length: N }, () => Array(M).fill(0)); // 평균값 계산 시 사용할 배열

// 시계 방향으로 한 칸씩 회전하는 함수
function rotate(sRow, sCol, eRow, eCol) {
  // 1) 가장 왼쪽 위 모서리 값을 저장한다.
  let tmp = arr[sRow][sCol];

  // 2) 직사각형 가장 왼쪽 열을 위로 한 칸씩 shift 한다.
  //    arr[0][0]에 arr[1][0]을 넣어서 한칸 씩 위로 올린다.
  for (let x = sRow; x < eRow; x++) {
    arr[x][sCol] = arr[x + 1][sCol];
  }

  // 3) 직사각형의 가장 아래 행을 왼쪽으로 한 칸씩 shift 한다.
  for (let y = sCol; y < eCol; y++) {
    arr[eRow][y] = arr[eRow][y + 1];
  }

  // 4) 직사각형 가장 오른쪽 열을 아래로 한 칸씩 shift 한다.
  for (let x = eRow; x > sRow; x--) {
    arr[x][eCol] = arr[x - 1][eCol];
  }

  // 5) 직사각형 가장 위쪽 행을 오른쪽으로 한 칸씩 shift 한다.
  for (let y = eCol; y > sCol; y--) {
    arr[sRow][y] = arr[sRow][y - 1];
  }

  // tmp를 가장 왼쪽 위 모서리 기준, 바로 오른쪽에 넣는다.
  arr[sRow][sCol + 1] = tmp;
}

// 범위 내에 있는지 검사하는 함수
function inRange(x, y) {
  return 0 <= x && x < N && 0 <= y && y < M;
}

// (x, y)와 인접한 숫자들과의 평균 값을 계산하는 함수
function average(x, y) {
  // 자기 자신도 포함해야 하므로 (0,0)도 추가한다.
  const dx = [0, 0, 1, 0, -1];
  const dy = [0, -1, 0, 1, 0];

  let activeNums = [];
  for (let k = 0; k < 5; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];

    if (inRange(nx, ny)) activeNums.push(arr[nx][ny]);
  }

  const total = activeNums.reduce((acc, v) => acc + v, 0);
  const counts = activeNums.length;
  return Math.floor(total / counts);
}

// 직사각형 내를 인접한 값들의 평균값으로 바꿔주는 함수
function makeAvg(sRow, sCol, eRow, eCol) {
  // tmpArr에 평균값을 적는다.
  for (let x = sRow; x <= eRow; x++) {
    for (let y = sCol; y <= eCol; y++) {
      tmpArr[x][y] = average(x, y);
    }
  }

  // arr에 tmpArr 값을 넣는다.
  for (let x = sRow; x <= eRow; x++) {
    for (let y = sCol; y <= eCol; y++) {
      arr[x][y] = tmpArr[x][y];
    }
  }
}

// 바람이 불 때마다 진행되는 로직
function simulate(startRow, startCol, endRow, endCol) {
  // 시계 방향으로 한 칸씩 회전하기
  rotate(startRow, startCol, endRow, endCol);

  // 직사각형 내 각각의 숫자들을 평균값으로 바꿔주기
  makeAvg(startRow, startCol, endRow, endCol);
}

// 시작) windInfos에 따라 바람 불기
windInfos.forEach(([x1, y1, x2, y2]) => simulate(x1, y1, x2, y2));

// 종료) 출력
arr.forEach((line) => console.log(...line));

// ----------------------------------------------------------------------
/**
 * 🔍 최단 Run length 인코딩 | O | 25.02.14 🔍
 */
let string = require("fs").readFileSync(0).toString().trim();

// 오른쪽으로 shift 하는 함수
function shiftNum(str) {
  let newStr = "";
  for (let i = 1; i < str.length; i++) {
    newStr += str[i];
  }
  newStr += str[0];
  return newStr;
}

// run-length encoding 함수
function runLengthEncoding(str) {
  let combi = "";
  let count = 1;
  let alpha = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === alpha) {
      count += 1;
    } else {
      combi += `${alpha}${count}`;
      alpha = str[i];
      count = 1;
    }
  }
  combi += `${alpha}${count}`;
  // return combi;
  return combi.length;
}

function simulate() {
  let nextStr = string;
  for (let i = 1; i < string.length; i++) {
    nextStr = shiftNum(nextStr);
    answer = Math.min(answer, runLengthEncoding(nextStr));
  }
}

let answer = runLengthEncoding(string);
simulate();
console.log(answer);
