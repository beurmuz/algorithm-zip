function solution(n, roads, sources, destination) {
  const visited = new Array(n + 1).fill(Infinity);

  const connect = new Array(n + 1).fill(0).map((_) => []);
  roads.forEach(([from, to]) => {
    connect[from].push(to);
    connect[to].push(from);
  });

  // BFS 알고리즘
  // 목적지로 부터 부대원의 위치까지의 거리를 표시
  const q = [destination];
  visited[destination] = 0;
  while (q.length) {
    const cur = q.shift();
    // 갈 수 있는 다음 길
    for (const next of connect[cur]) {
      if (visited[cur] + 1 < visited[next]) {
        visited[next] = visited[cur] + 1;
        q.push(next);
      }
    }
  }
  return sources.map((a) => (visited[a] !== Infinity ? visited[a] : -1));
}
