"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((value) => +value));

let map;
let visited;
let dx = [0, 1, 1, 1, 0, -1, -1, -1];
let dy = [1, 1, 0, -1, -1, -1, 0, 1];
let result = [];

const BFS = (start, w, h) => {
  let queue = [start];
  let count = 0;
  while (queue.length) {
    let [curX, curY] = queue.shift();
    if (!visited[curY][curX]) {
      if (map[curY][curX]) count++; // 섬이 있으면 count 1증가
      visited[curY][curX] = true; // 방문 체크
      for (let i = 0; i < dx.length; i++) {
        // 지도 범위 밖으로 나가는지 체크
        if (
          curX + dx[i] < 0 ||
          curY + dy[i] < 0 ||
          curX + dx[i] >= w ||
          curY + dy[i] >= h
        ) {
          continue;
        }
        if (visited[curY + dy[i]][curX + dx[i]]) continue; // 주변을 방문한적이 있는지 체크
        if (map[curY + dy[i]][curX + dx[i]]) {
          // 주변에 섬이 있는곳을 queue에 넣어준다
          queue.push([curX + dx[i], curY + dy[i]]);
        }
      }
    }
  }
  return count;
};

for (let i = 0; i < input.length - 1; i++) {
  const [w, h] = input[i];
  let answer = 0;
  map = input.slice(i + 1, i + h + 1);
  i = i + h;
  visited = [...Array(h)]
    .map(() => false)
    .map(() => [...Array(w)].map(() => false));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (visited[i][j]) continue;
      let count = BFS([j, i], w, h);
      if (count) answer++; // 섬이 있으므로 answer 1증가
    }
  }
  result.push(answer);
}

console.log(result.join("\n"));
