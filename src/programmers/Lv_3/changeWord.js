"use strict";

const canGo = (s1, s2) => {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) count++;
  }
  return count === 1 ? true : false;
};

const solution = (begin, target, words) => {
  if (words.indexOf(target) < 0) return 0;

  const visited = {};
  const queue = [begin];
  visited[begin] = 0;
  let qIndex = 0;
  while (queue.length !== qIndex) {
    // console.log(queue)
    // console.log(visited)
    const current = queue[qIndex];
    if (current === target) break;

    for (const word of words) {
      if (canGo(current, word) && !visited[word]) {
        visited[word] = visited[current] + 1; // 현재 depth === 이전 depth + 1
        queue.push(word);
      }
    }
    qIndex++;
  }
  return visited[target] ? visited[target] : 0;
};
