/**
 * [bfs]
 * - 여러가지 경우가 있고 최단 거리, 최소 횟수를 구하는 문제는 bfs로!
 */

const solution = (x, y, n) => {
  let answer = -1;

  const bfs = () => {
    // 왔다갔다 하다보면 어느새 같은 곳을 방문할 수 있으므로, 방문 여부를 기록해 놓는 것이 좋다.
    const visited = Array.from({ length: y + 1 }, () => false);

    let queue = [[x, 0]]; // [현재 지점, 카운트 횟수]
    let qIdx = 0;

    while (queue.length !== qIdx) {
      let [now, cnt] = queue[qIdx]; // 우선 queue에 있는 걸 뺴고

      // 뺀 값이 y와 같은지 검사한다. 같다면 정답 찾기 끝
      if (now === y) {
        answer = cnt;
        return;
      }

      // 같지 않다면 같은 곳을 찾아 떠나야 한다. 갈 수 있는 곳은 +n, *2, *3
      for (let nx of [now + n, now * 2, now * 3]) {
        // 아직 방문하지 않았고, nx가 ny와 같거나 작은 경우(즉, 범위 내에 있을 때에만)
        if (!visited[nx] && nx <= y) {
          // queue에 넣어준다. (now에서 범위 내에 있고, 아직 방문하지 않은 곳을 방문하기 위해서)
          queue.push([nx, cnt + 1]);
          // queue에 넣었으면 방문했다는 뜻! 방문 표시를 해준다.
          visited[nx] = true;
        }
      }
      // now에서 이루어지는 작업이 모두 끝났으므로 qIdx를 다음 위치로 옮겨주어야 한다.
      qIdx++;
    }
  };
  // BFS는 인자값이 없다.
  bfs();

  return answer;
};

// 🔎 25.07.16 복습
function solution(x, y, n) {
  let answer = -1;

  const bfs = () => {
    const visited = Array.from({ length: y + 1 }, () => 0);
    let queue = [[x, 0]]; // [x(현재값), count]
    let queueIdx = 0;

    while (queueIdx !== queue.length) {
      let [now, count] = queue[queueIdx];

      if (now === y) {
        answer = count;
        return;
      }

      for (let next of [now + n, now * 2, now * 3]) {
        if (visited[next] === 0 && next <= y) {
          queue.push([next, count + 1]);
          visited[next] = 1;
        }
      }
      queueIdx++;
    }
  };
  bfs();

  return answer;
}
