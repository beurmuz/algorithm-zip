"use strict";

/**
 * [그래프 탐색 문제]
 * 현재 노드와 연결된 노드를 우선 탐색하며 정답을 찾아야하므로 => DFS 이용하기
 *
 * 문제 풀이
 * - 알파벳 순서가 앞서는 경로를 return해야하니 tickets 배열을 정렬해야한다.
 *      - 출발역 tickets[0]을 기준으로 오름차순 정렬
 *      - 출발역이 동일하면 도착역 tickets[1]을 기준으로 오름차순 정렬
 * - JS의 sort()함수는 위의 조건대로 정렬하는 것이 default로 설정되어 있다.
 * - 이동 횟수가 tickets의 길이와 일치하는 경우, 모든 역을 방문했다는 뜻이된다.
 */
const solution = (tickets) => {
  let answer = [];
  const result = []; // 방문하는 역을 저장할 배열
  const visited = [];

  tickets.sort();
  console.log(tickets);

  const dfs = (node, level) => {
    result.push(node);

    if (level === tickets.length) {
      answer = result;
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === node) {
        // 출발역이 node와 일치하고, 해당 역을 아직 방문하지 않았다면
        visited[i] = true; // 방문 처리
        if (dfs(tickets[i][1], level + 1)) {
          // 현재 노드의 도착역이 다음 dfs의 출발역이 된다.
          return true; // 새로 호출한 결과가 true라면 정상적인 종료가 되게끔 해준다.
        }
        // false를 반환하면 이 단계를 건너뛰고 방문을 취소한다.
        visited[i] = false;
      }
    }
    // 전체를 탐색하지 못한 경우가 발생했으므로 현재 들어간 역은 유효 경로가 아니다.
    result.pop();
    return false;
  };

  dfs("ICN", 0);
  return answer;
};
