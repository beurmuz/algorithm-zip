/**
 * [시뮬레이션]
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
    "I",
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

  // 1-1. keys를 5*5 표로 변환한다.
  let grid = [];
  let line = [];
  for (let i = 0; i < keys.length; i++) {
    if (alphabet.indexOf(keys[i]) > -1) {
      // -1이라는건 해당 값이 alphabet에 없음을 의미
      line.push(keys[i]);
      alphabet[alphabet.indexOf(keys[i])] = "";
    }
    if (line.length === 5) {
      grid.push(line); // grid에 추가
      line = []; // 초기화
    }
  }

  // 1-2. 남은 칸 채우기
  let alphaIdx = 0;
  while (grid.length < 5) {
    if (alphabet[alphaIdx] !== "") {
      line.push(alphabet[alphaIdx]);
      alphabet[alphaIdx] = "";
    }
    alphaIdx++;
    if (line.length === 5) {
      grid.push(line);
      line = [];
    }
  }

  // 2. 메세지를 2글자씩 나눈다. 이때 같은 두 글자로 이루어진 쌍이 있다면 사이에 'X' or 'Q'를 넣는다.
  let newMessage = [];
  for (let i = 0; i < message.length; i++) {
    newMessage.push(message[i]);
    if (newMessage.length % 2 === 1 && message[i] === message[i + 1]) {
      if (message[i] === "X") newMessage.push("Q");
      else newMessage.push("X");
    }
  }
  if (newMessage.length % 2 !== 0) newMessage.push("X");

  // 3-1. 각 글자의 좌표 정보를 구하는 함수를 정의한다.
  function findXY(word) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (grid[i][j] == word) return [i, j];
      }
    }
  }

  // 3-2. 2글자씩 암호화를 진행한다.
  for (let i = 0; i < newMessage.length - 1; i += 2) {
    let [ax, ay] = findXY(newMessage[i]);
    let [bx, by] = findXY(newMessage[i + 1]);

    // 1) 같은 행에 존재하면 오른쪽으로 한칸씩 이동한 글자로 암호화한다.
    if (ax === bx) {
      ay = (ay + 1) % 5;
      by = (by + 1) % 5;
    }
    // 2) 같은 열에 존재하면 아래로 한칸씩 이동한 글자로 암호화한다.
    else if (ay === by) {
      ax = (ax + 1) % 5;
      bx = (bx + 1) % 5;
    }
    // 3) 같은 행도, 같은 열도 아니면 서로 열을 교환한다.
    else if (ax !== bx && ay !== by) {
      [ay, by] = [by, ay];
    }
    answer.push(grid[ax][ay]);
    answer.push(grid[bx][by]);
  }

  return answer.join("");
};

console.log(solution(message, keys));
