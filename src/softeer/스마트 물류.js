/**
 * [완전탐색]
 * - JS로 풀면 시간 초과가 발생하고, 같은 코드지만 Python으로 풀면 통과한다.
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [N, K] = inputs[0].split(" ").map((v) => +v);
  const info = inputs[1].split("");
  const visited = Array.from({ length: N }, () => false);

  // 1. 완전탐색하여 부품을 집을 수 있는 최대 로봇 수를 나타낸다.
  let answer = 0;
  for (let i = 0; i < N; i++) {
    // 로봇이면
    if (info[i] === "P") {
      for (let j = i - K; j <= i + K; i++) {
        if (i === j || j < 0 || N <= j) continue;
        if (info[j] === "H" && !visited[j]) {
          // 부품이고 아직 사용하지 않았다면
          visited[j] = true;
          answer++;
          break;
        }
      }
    }
  }

  return answer;
};

console.log(solution(inputs));

// Python으로 푼 풀이 (풀이 통과)
/*import sys

input = sys.stdin.readline 
n, k = map(int,input().split())
line = list(str(input()))

check = [False] * n

for i in range(0, n):
    if line[i] == 'P': #로봇이면
        for j in range(i-k, i+k+1):
            if (i==j) or (0>j) or (j>=n) : continue
            if line[j] == 'H' and not check[j]: #가장 가까운 부품을 찾는다 (완전탐색)
                check[j] = True
                break
                
count = 0
for result in check:
    if result == True:
        count+=1

print(count) */
