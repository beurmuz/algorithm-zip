/**
 * [시뮬레이션, 구현, 그리디]
 * - 시뮬레이션에 많이많이많이많이많이 약하다! 특히 2-3차원에서 많이 헷갈려하는 듯..
 * - ✅ 배열 90도 회전에서 좀 많이 막혔다. (배열 회전)
 * - ✅ 함수로 나누는 연습 / 이를 연결하는 연습 필요
 */

const [input, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, K] = input.split(" ").map((v) => +v);
const laptop = Array.from({ length: N }, () => Array(M).fill(0));
const stickers = [];

// 스티커 정보 분류하기
for (let i = 0; i < inputs.length; i++) {
  const [R, C] = inputs[i].split(" ").map((v) => +v);
  const tmp = [];

  for (let j = 0; j < R; j++) {
    const row = inputs[++i].split(" ").map((v) => +v);
    tmp.push(row);
  }
  stickers.push(tmp);
}

// 스티커를 회전하는 함수
const rotation = (arr) => {
  let turnArr = [];
  let row = arr.length;
  let col = arr[0].length;

  // 회전하면 r => c, c => r이 되므로 col부터 만들어주어야한다.
  // arr[0][0] -> arr[0][2]
  // arr[1][0] -> arr[0][1]
  // arr[2][0] -> arr[0][0]
  // arr[x][y] -> arr[y][x뒤집은거]가 되는 것이다.
  // 즉, 구해야 하는 것은 arr[0][0]부터이므로 [x][y] 값을 하나씩 가져와서 line(한 행)을 만들면 된다.
  for (let y = 0; y < col; y++) {
    // col => row가 되는 것
    const line = [];
    for (let x = row - 1; x >= 0; x--) {
      // row => col이 되는 것
      line.push(arr[x][y]);
    }
    turnArr.push(line);
  }
  return turnArr;
};

// 해당 좌표가 가능한지 검사하는 함수
const possible = (sticker, x, y) => {
  let row = sticker.length;
  let col = sticker[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (sticker[i][j] === 1 && laptop[x + i][y + j] === 1) {
        // 스티커의 영역이면서, 이미 노트북에 스티커가 있다면
        return false;
      }
    }
  }
  return true;
};

// 놓을 수 있는지 판단하는 함수
const update = (sticker, x, y) => {
  let row = sticker.length;
  let col = sticker[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      laptop[x + i][y + j] += sticker[i][j];
    }
  }
};

// 가능한 지점에 스티커를 붙이는 함수
const attach = (sticker) => {
  // laptop의 위치에 스티커를 붙인다.
  for (let i = 0; i <= N - sticker.length; i++) {
    for (let j = 0; j <= M - sticker[0].length; j++) {
      if (possible(sticker, i, j)) {
        // laptop에 스티커를 붙여준다.
        update(sticker, i, j);
        return true; // 가능하면 스티커를 붙여서 성공함을 return한다.
      }
    }
  }
  return false;
};

// 모든 스티커를 탐색하며 laptop에 붙인다.
stickers.forEach((sticker) => {
  let tmp = sticker; // 현재 스티커의 정보를 저장한다.
  console.log("new sticker ---------");
  console.log(tmp);

  // 스티커를 오른쪽으로 90도씩 돌려가면서 붙여본다.
  for (let k = 0; k < 4; k++) {
    // 아직 회전을 안하고 넣었는데 되면 반복문을 빠져나온다.
    if (attach(tmp)) break;
    // 한바퀴 회전을 시켜서 tmp 값을 회전 값들로 업데이트한다.
    else {
      tmp = rotation(tmp);
      console.log(tmp);
    }
  }
  console.log(laptop);
});

let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (laptop[i][j] === 1) answer++;
  }
}
console.log(answer);
