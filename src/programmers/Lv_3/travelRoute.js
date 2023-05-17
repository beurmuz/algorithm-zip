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
 */
const solution = (tickets) => {
  const result = []; // 방문하는 역을 저장할 배열
  const visited = [];
  tickets.sort();

  const dfs = (node, level) => {
    result.push(node);

    // 이동 횟수가 tickets의 길이와 일치하는 경우, 모든 역을 방문했다는 뜻이다.
    if (level === tickets.length) return true;

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
  return result;
};

/**
 * BFS로도 푸는 방법이 있길래 확인해봤는데, dfs보다 훨씬 많은 시간이 소요된다.
 *
 */
const solution = (tickets) => {
  let answer = [];
  let withICN = [];
  let withoutICN = [];
  let flag = false;

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === "ICN") withICN.push(tickets[i]);
    else withoutICN.push(tickets[i]);
  }

  // 항상 ICN으로 시작하기 때문에 ICN을 기준으로 tickets을 정렬함
  tickets = [...withICN.sort(), ...withoutICN.sort()];

  const bfs = (i) => {
    let queue = [[tickets[i][1], [tickets[i][0]]]]; // 출발공항, 전체 경로
    let visited = [[i]];

    while (queue.length) {
      let now = queue.shift();
      let checkVisited = visited.shift();

      // 현재 저장된 값이 tickets의 길이와 같을 때
      // (= 모든 여행경로를 돌고 마지막 공항에 도착한 경우)
      if (now[1].length === tickets.length) {
        flag = true;
        return (answer = [...now[1], now[0]]); // [...지금까지의 경로, 현재 출발지점]
      }

      tickets.forEach((ticket, index) => {
        if (checkVisited.includes(index)) return; // 이미 방문했으니 건너뛴다.
        if (ticket[0] === now[0]) {
          queue.push([ticket[1], [...now[1], ticket[0]]]);
          visited.push([...checkVisited, index]);
        }
      });
    }
  };

  // BFS를 활용하여 모든 경우의 수를 탐색함
  for (let i = 0; i < tickets.length; i++) {
    bfs(i);
    if (flag) return answer;
  }
};
