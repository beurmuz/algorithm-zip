"use strict";

function solution(x, y, n) {
  let answer = -1;

  const bfs = () => {
    const visited = Array.from({ length: y + 1 }, () => 0); // 방문 여부를 체크할 visited 배열
    const queue = [[x, 0]]; // x는 현재 값, 0은 연산 횟수를 의미한다.
    let queueIndex = 0; // 시간 단축을 위해 index를 이용한 방법을 사용한다.
    while (queueIndex !== queue.length) {
      // queueIndex와 queue.length가 같지 않다는 것은, queue의 길이가 더 길어 앞으로 연산할 것이 남아있음을 의미한다.
      let [now, count] = queue[queueIndex]; // 현재값과 count정보를 저장한다.
      if (now === y) {
        // 현재 값이 y와 같다면, 현재 값을 answer에 넣고 return한다.
        answer = count;
        return;
      }

      for (let next of [now + n, now * 2, now * 3]) {
        // 가능한 연산횟수를 전부 넣는다.
        if (visited[next] === 0 && next <= y) {
          // 아직 방문하지 않았고, y보다 작거나 같은 값이면
          queue.push([next, count + 1]); // queue에 next값과 count에서 +1 한 값을 넣는다.
          visited[next] = 1; // 방문 표시를 한다.
        }
      }
      queueIndex++; // 하나의 값을 탐색했으니 queueIndex의 값을 1 증가시킨다.
    }
  };
  bfs();
  if (x === y) answer = 0; // x와 y가 같은 경우도 고려해준다.
  return answer;
}
