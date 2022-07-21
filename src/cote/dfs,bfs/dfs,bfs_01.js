'use strict';

function solution(N, M, ices) {
  const graph = [];
  ices.split('\n').forEach(ice => {
    ice = ice.split('').map(i => Number(i));
    graph.push(ice);
  });

  function dfs(x, y) {
    if (x <= -1 || x >= N || y <= -1 || y >= M) {
      return false;
    }
  
    if (graph[x][y] === 0) {
      graph[x][y] = 1;
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }

    return false;
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(i, j)) {
        answer += 1;
      }
    }
  }

  console.log(answer);
}

solution(3, 3, '001\n010\n101')
