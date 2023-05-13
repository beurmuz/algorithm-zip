"use strict";

const solution = (n, edge) => {
  const graph = Array.from({ length: n + 1 }, () => []);
  edge.forEach((line) => {
    let [a, b] = line;
    // 양방향 그래프이므로 a, b 둘다 넣어준다.
    graph[a].push(b);
    graph[b].push(a);
  });
  const visited = Array.from({ length: n + 1 }, () => 0); // 방문 여부와 함께 간선의 수(거리) 정보를 저장할 배열
  const queue = [1]; // 일단 1만큼 움직였다고 친다.
  visited[1] = 1; // 방문 표시를 해주고

  const bfs = () => {
    let qIndex = 0;

    while (queue.length !== qIndex) {
      let now = queue[qIndex];
      for (let next of graph[now]) {
        if (!visited[next]) {
          // visited에 next에 대한 정보가 아직 없다면 갈 수 있는 노드인 것이다.
          visited[next] = visited[now] + 1;
          queue.push(next);
        }
      }
      qIndex++;
    }
  };
  bfs();
  const max = Math.max(...visited); // 최댓값을 찾아서
  return visited.filter((v) => v === max).length; // 최댓값과 같은 값이 또 있다면, filter로 찾아서 length를 반환한다.
};
