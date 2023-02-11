"use strict";

/**
 * 주사위를 굴리는 최소 횟수를 구하라길래 bfs로 풀어야함은 알 수 있었다.
 * - 다만 10x10이래서 2차원 배열을 만들어 풀어야하는 줄 알았으나, 그냥 1차원 배열을 이용해 값을 저장해도 되는 것이었다.
 * - 굳이 방문 여부를 나타내는 배열과 주사위를 굴린 횟수를 따로 저장할 필요는 없다.
 *   - 하나의 배열(visited)에 방문 여부와 주사위를 굴린 횟수를 함께 표현하면 된다.
 *   - (-1)은 아직 방문하지 않은 것이고, -1이 아닌 값이 주사위를 굴린 횟수를 의미한다.
 */
const [counts, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (counts, inputs) => {
  const [n, m] = counts.split(" ").map(Number); // n: 사다리의 수, m: 뱀의 수
  const board = Array.from({ length: 101 }, (_, index) => index++);
  const visited = Array.from({ length: 101 }, () => -1); // 방문 여부와 주사위 굴린 횟수를 저장할 배열 선언

  for (let i = 0; i < n + m; i++) {
    let [from, to] = inputs[i].split(" ").map(Number);
    board[from] = to; // from 위치의 값을 to로 바꾸어준다. (해당 위치에 오면 바로 to로 가게끔 하기 위함)
  }

  const bfs = (board) => {
    // console.log(queue);
    let queue = [1]; // 첫번째 칸에서 시작하므로 1을 넣어 시작한다.
    visited[1] = 0; // 방문 표시

    while (queue.length) {
      let now = queue.shift();

      for (let dice = 1; dice <= 6; dice++) {
        let next = now + dice; // 다음 칸(next)은 현재 칸(now) + 주사위에 나온 수 (dice) 이다.

        if (next > 100) continue; // 100을 넘어가면 건너뛴다.

        next = board[next]; // board[next] 위치에 뱀이나 사다리가 있다면, 그 곳에 있는 숫자(위치)로 next를 이용한다.
        if (visited[next] === -1) {
          // 아직 방문한 적이 없다면
          visited[next] = visited[now] + 1; // now에서 한번 이동한 것이므로 +1을 한다. (주사위 갯수를 저장)
          queue.push(next);
        }
      }
    }
  };
  bfs(board);
  return visited[100]; // 100번째 칸에 수가 저장된다.
};

console.log(solution(counts, inputs));
