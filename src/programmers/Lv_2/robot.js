/**
 * [BFS 문제]
 */

function solution(board) {
  let answer = 0;
  //가로길이
  let xLen = board[0].length;
  //세로길이
  let yLen = board.length;

  let startCor;
  board = board.map((element) => element.split(""));
  board.forEach((element, index) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === "R") {
        // x,y 순서 [1,3]
        startCor = [i, index];
        break;
      }
    }
  });

  let queue = [startCor];
  board[startCor[1]][startCor[0]] = "C";

  let moveX = [1, -1, 0, 0];
  let moveY = [0, 0, 1, -1];

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let moveI = 0; moveI < 4; moveI++) {
        let dx = x + moveX[moveI];
        let dy = y + moveY[moveI];
        while (
          dx >= 0 &&
          dy >= 0 &&
          dx < xLen &&
          dy < yLen &&
          board[dy][dx] !== "D"
        ) {
          dx += moveX[moveI];
          dy += moveY[moveI];
        }

        dx -= moveX[moveI];
        dy -= moveY[moveI];

        if (board[dy][dx] === "G") {
          return answer + 1;
        } else if (board[dy][dx] !== "C") {
          board[dy][dx] = "C";
          queue.push([dx, dy]);
        }
      }
    }
    answer++;
  }
  return -1;
}
