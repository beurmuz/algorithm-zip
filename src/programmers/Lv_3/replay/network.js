/**
 * [DFS, 깊이우선탐색]
 * - 핵심은 주어진 computers가 computers[i][i]를 기준으로 좌우대칭이라는 것이다.
 *   => 그렇기 때문에 dfs에서 for문을 한번만 돌려도 되는 것이다.
 */

function solution(n, computers) {
  let answer = 0;
  const visited = Array.from({ length: n }, () => false); // 방문여부 저장

  const dfs = (idx) => {
    visited[idx] = true;

    for (let i = 0; i < n; i++) {
      if (computers[idx][i] && !visited[i]) dfs(i); // 연결되어 있는 점을 계속 탐색하고 또 탐색한다.
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i); // 아직 방문하지 않은 경우 연관된 노드 탐색 시작
      answer++; // 네트워크 개수 1 증가
    }
  }
  return answer;
}
