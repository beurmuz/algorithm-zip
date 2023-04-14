"use strict";

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, input) => {
  const board = Array.from({ length: n }, () => Array(n).fill(0));

  // input값 가져오기
  const k = +input[0]; // 사과 개수
  let index = 1;
  for (let i = 0; i < k; i++) {
    let [x, y] = input[index].split(" ").map((v) => +v);
    board[x - 1][y - 1] = 2; // 사과를 board에 표시
    index++;
  }
  const l = +input[index]; // 뱀의 방향 변환 횟수
  const change = [];
  index++;
  for (let i = 0; i < l; i++) {
    change.push(input[index].split(" ")); // x초가 끝난 뒤, 왼쪽(L)or오른쪽(R)로 90도 방향 회전
    index++;
  }

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let snakeDirection = 0; // 0: 오른쪽, 1: 아래, 2: 왼쪽, 3: 위
  let time = 0;
  let head = [0, 0];
  let tail = [0, 0];
  let directionChangeTime = +change[0][0];
  const path = [];

  while (1) {
    // 1. 뱀이 몸 길이를 늘려 머리를 다음칸에 위치시킨다. (바로 앞을 검사한다)
    const nx = head[0] + dx[snakeDirection];
    const ny = head[1] + dy[snakeDirection];

    // 1-1. 이동한 칸의 범위에 따라 구현
    if(nx < 0 || nx >= n || ny < 0 || ny >= n) break; // 벽이면 끝난다.
    else if(board[nx][ny] === 1) break; // 헤드를 옮겼는데 자기 자신이 있으면 끝난다.
    else {
        // 범위 내에 있고 자기 자신이 아닌 경우
        // 1. 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.
        if (board[nx][ny] === 2) {
            board[nx][ny] = 1; // 뱀이 위치해 있는 칸은 1로 한다.
            head = [nx, ny];
            path.push([nx, ny]);
        } 
        // 2. 이동한 칸이 빈칸이면, 몸길이를 줄여 꼬리가 위치한 칸을 비워준다. (헤드를 늘렸으니 몸길이는 변하지 않음) 
        else if (board[nx][ny] === 0) {
            board[nx][ny] = 1;
            head = [nx, ny];
            path.push([nx, ny]);
            board[tail[0]][tail[1]] = 0; // 꼬리가 있는 지점을 0으로 만들고,
            let next = path.shift(); 
            tail = [next[0], next[1]];
        }
    }
    time++;

    if(time === directionChangeTime) {
        if(change[0][1] === 'D') { // 오른쪽
            snakeDirection = (snakeDirection + 1) % 4;
        } else if(change[0][1] === 'L') { // 왼쪽
            if(snakeDirection-1 < 0) snakeDirection = 3;
            else snakeDirection = (snakeDirection - 1) % 4
        }
        change.shift();
        if(change.length === 0) directionChangeTime = 0;
        else directionChangeTime = +change[0][0];
    }
  }
  return time + 1;
};
console.log(solution(+n, input));
