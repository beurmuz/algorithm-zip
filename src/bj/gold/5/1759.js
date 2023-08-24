/**
 * [백트래킹 문제]
 * - dfs 내 조건 설정을 잘못하여 시간이 좀 걸렸다.
 *   - 중요한 것은 단순히 모음의 개수가 2개 이상일 때 answer에 추가하는 것이 아닌
 *   - 모음의 개수가 0보다 크면서 암호 길이에서 모음의 개수를 뺐을 때 그 값이 1보다 커야 answer가 될 수 있다는 것이다.
 */

const [inputs, ...alphabet] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, alphabet) => {
  const [L, C] = inputs.split(" ").map((v) => +v);
  const arr = alphabet[0].split(" ").sort();
  const aeiou = new Set(["a", "e", "i", "o", "u"]);
  let answer = [];

  const dfs = (startIdx, pw) => {
    if (pw.length === L) {
      let count = 0;
      for (let k = 0; k < L; k++) {
        if (aeiou.has(pw[k])) count++;
      }
      if (count > 0 && L - count > 1) answer.push(pw.join(""));
      return;
    } else {
      for (let i = startIdx; i < C; i++) {
        pw.push(arr[i]);
        dfs(i + 1, pw);
        pw.pop(arr[i]);
      }
    }
  };
  dfs(0, []);
  return answer.join("\n");
};

console.log(solution(inputs, alphabet));
