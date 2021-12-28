const input = require('fs').readFileSync('./15650.txt').toString().split(' ');

const N = parseInt(input[0]);
const M = parseInt(input[1]);

const visited = new Array(N);
const output = [];
let result = '';

function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(result);