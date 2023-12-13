/**
 * [최단 거리, BFS (그래프 탐색)]
 * - 입력값의 최대 크기가 5 * 10^5인 점과 최단 거리를 구해야한다고 하여 그래프 탐색 중 'BFS'를 이용했다.
 * - bfs의 시작점을 최종 목적지로 두고 풀어야하는 문제
 */

/**
 * 첫번째 풀이
 * - 정확성 68.8 / 100
 * - 16개의 테스트케이스 중 5개가 시간초과가 발생했다.
 * - 시간 초과가 발생한 이유는 bfs의 시작점, 새 bfs를 호출할 때마다 visited를 다시 만들어서 그런 것 같다.
 */
const solution = (n, roads, sources, destination) => {
  let answer = [];

  // 인접 행렬로 지역별 연결관계 나타내기
  const connectRoads = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < roads.length; i++) {
    let [s, e] = roads[i];
    connectRoads[s].push(e);
    connectRoads[e].push(s);
  }

  const bfs = (start, distance) => {
    let queue = [];
    const visited = Array.from({ length: n + 1 }, () => false);
    queue.push([start, distance]);
    visited[start] = true; // 방문 표시

    while (queue.length) {
      let [now, dis] = queue.shift();
      if (now === destination) {
        return dis;
      }

      for (let nx of connectRoads[now]) {
        if (visited[nx]) continue;
        visited[nx] = true; // 방문 표시
        queue.push([nx, dis + 1]);
      }
    }
    return -1;
  };

  for (let i = 0; i < sources.length; i++) {
    answer.push(bfs(sources[i], 0));
  }

  return answer;
};

/**
 * 새로운 풀이
 * - bfs의 시작지점을 destination으로 넣고, visited에 방문여부와 최단거리를 기록해주는 방법으로 코드를 바꾸었더니 통과했다.
 */
const solution = (n, roads, sources, destination) => {
  // 인접 행렬로 지역별 연결관계 나타내기
  const connectRoads = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < roads.length; i++) {
    let [s, e] = roads[i];
    connectRoads[s].push(e);
    connectRoads[e].push(s);
  }

  // 방문 여부, 최단거리 기록하기
  const visited = Array.from({ length: n + 1 }, () => Infinity); // Infinity가 아닌 false로 넣으면 while문에서 최단거리가 기록되지 않는다.

  const bfs = (desitination) => {
    let queue = [desitination];
    visited[desitination] = 0;

    while (queue.length) {
      let now = queue.shift();

      // 갈 수 있는 곳을 찾는다.
      for (let nx of connectRoads[now]) {
        if (visited[now] + 1 < visited[nx]) {
          visited[nx] = visited[now] + 1;
          queue.push(nx);
        }
      }
    }
  };
  bfs(destination);

  return sources.map((v) => (visited[v] == Infinity ? -1 : visited[v]));
};
