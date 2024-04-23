/**
 * [시뮬레이션, 구현]
 * - 시간복잡도는 O(N)이다. reduce시 N만큼 돌기 때문이다.
 * - 처음에는 인접리스트로 풀까했지만 어차피 Aj와 Bj 비교 후, 다른 친분 관계에서 Bj와 Aj를 비교하게 될 수 있으므로 그냥 모든 친분 관계를 검사할 때 한번에 비교해주면 된다.
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [N, M] = inputs[0].split(" ").map((v) => +v);
  const weights = [0, ...inputs[1].split(" ").map((v) => +v)];
  const answer = Array.from({ length: N + 1 }, () => 1); // 1: 본인이 최고라고 생각, 0: 최고가 아님
  // 친분이 없는 멤버는 본인이 최고라고 생각하므로, 친분에서 1로 바꿔줄 수 없기에 default값을 1로 두면 된다.

  for (let i = 2; i < inputs.length; i++) {
    let [a, b] = inputs[i].split(" ").map((v) => +v);
    if (weights[a] > weights[b]) {
      // a회원은 본인이 더 무거운 무게를 들 수 있으므로 최고임
      // b회원은 본인보다 무거운 무게를 들 수 있는 회원이 있어 최고가 아님
      answer[b] = 0;
    } else if (weights[a] < weights[b]) {
      // a회원은 본인보다 무거운 무게를 들 수 있는 회원이 있어 최고가 아님
      // b회원은 본인이 더 무거운 무게를 들 수 있으므로 최고임
      answer[a] = 0;
    } else {
      // weights[a] === weights[b]
      // 같은 무게를 들 수 있으므로 둘다 최고가 아님
      answer[a] = 0;
      answer[b] = 0;
    }
  }

  return answer.reduce((acc, v) => acc + v, 0) - 1; // 임의로 0 index를 추가해주었으므로 1을 빼주어야 한다.
};

console.log(solution(inputs));
