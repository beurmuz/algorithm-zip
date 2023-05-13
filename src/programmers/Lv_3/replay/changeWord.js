"use strict";

/**
 * [BFS 문제]
 * - 각각의 단어를 노드라고 생각해보고, 어떤 순서로 방문할 수 있을지 생각해보자.
 * - 현재 문자열에서, 단 하나의 철자만 다른 문자열을 가진 노드로 방문이 가능하다.
 *   => 두 문자열의 철자를 비교하는 함수를 만들어 탐색하면 된다.
 *
 * BFS는 연결된 노드들을 먼저 방문하고 다음 deps로 넘어간다.
 *     - 현재 방문하고 있는 노드들의 deps는 이전 deps + 1이다.
 *
 */
const canGo = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++;
  }
  return count === 1 ? true : false;
};

const solution = (begin, target, words) => {
  if (words.indexOf(target) < 0) return 0; // 없는 문자인 경우

  const visited = {};
  const queue = [begin];
  visited[begin] = 0;

  const bfs = () => {
    let qIndex = 0;

    while (queue.length !== qIndex) {
      const now = queue[qIndex];
      if (now === target) break;

      for (const word of words) {
        if (canGo(now, word) && !visited[word]) {
          visited[word] = visited[now] + 1;
          queue.push(word);
        }
      }
      qIndex++;
    }
  };
  bfs();
  return visited[target] ? visited[target] : 0;
};
