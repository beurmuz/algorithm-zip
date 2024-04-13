/**
 * [시뮬레이션, 구현]
 * - 조건에 따라 순차적으로 잘 구현하면 된다.
 */
const [message, keys] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(""));

const solution = (message, keys) => {
  let answer = [];
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I", // (I===J)
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // 알파벳의 위치를 찾는 함수
  function findIndex(board, value) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (board[i][j] === value) {
          return [i, j];
        }
      }
    }
  }

  // 1. 주어진 키를 5x5 표로 만들기
  let grid = [];
  let tmp = []; // row를 구성할 5칸의 배열
  for (let i = 0; i < keys.length; i++) {
    // alphabet 배열안에 keys[i]가 있다면 tmp에 넣어준다.
    if (alphabet.indexOf(keys[i]) > -1) {
      tmp.push(keys[i]);
      alphabet[alphabet.indexOf(keys[i])] = "";
    }
    if (tmp.length === 5) {
      grid.push(tmp);
      tmp = [];
    }
  }
  // tmp.length가 아직 5가 아닌 경우 자동으로 tmp안에 들어있다.
  // 남는 칸에 아직 등장하지 않은 알파벳을 순서대로 넣어야 한다.
  let alphIdx = 0;
  while (grid.length < 5) {
    if (alphabet[alphIdx] !== "") {
      tmp.push(alphabet[alphIdx]);
      alphabet[alphIdx] = "";
    }
    alphIdx++;
    if (tmp.length === 5) {
      grid.push(tmp);
      tmp = [];
    }
  }

  // 2. 메세지를 2글자씩 나누고, 연속된 문자가 있다면 'X'와 'Q'를 적절히 이용해 수를 맞춰준다.
  let code = [];
  for (let i = 0; i < message.length; i++) {
    code.push(message[i]); // code에 현재 값을 넣는다.
    // code의 길이가 홀수이고, 현재 값과 다음 값이 같다면
    if (code.length % 2 === 1 && message[i] === message[i + 1]) {
      if (message[i] === "X") {
        code.push("Q");
      } else {
        code.push("X");
      }
    }
  }
  // 길이가 홀수인 경우 'X'를 넣어 짝을 맞춰준다.
  if (code.length % 2 !== 0) code.push("X");

  // 3. 암호화 하기 (두 글자씩 비교한다.)
  for (let i = 0; i < code.length - 1; i += 2) {
    let [ax, ay] = findIndex(grid, code[i]);
    let [bx, by] = findIndex(grid, code[i + 1]);
    // 1) 같은 행에 위치할 경우
    if (ax === bx) {
      ay = (ay + 1) % 5;
      by = (by + 1) % 5;
    }
    // 2) 같은 열에 위치할 경우
    else if (ay === by) {
      ax = (ax + 1) % 5;
      bx = (bx + 1) % 5;
    }
    // 3. 서로 다른 행과 열에 위치할 경우 -> 열을 서로 교환
    else if (ax !== bx && ay !== by) {
      [ay, by] = [by, ay];
    }
    answer.push(grid[ax][ay]);
    answer.push(grid[bx][by]);
  }

  return answer.join("");
};

console.log(solution(message, keys));
