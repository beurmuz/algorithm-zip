const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const solution = (n, m) => {
  const visited = Array.from({ length: n }, () => 0);
  const output = [];
  let answer = "";

  const dfs = (num, depth) => {
    //   console.log(`num: ${num}, depth: ${depth}`);
    if (depth === m) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === 1) continue;
      visited[i] = 1; // 방문 표시
      output.push(i + 1);
      dfs(i, depth + 1);
      output.pop();
      visited[i] = 0; // 방문 표시 해제
    }
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(n, m));
