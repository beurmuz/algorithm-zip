/**
 * [완전탐색, dfs]
 */

function solution(word) {
  const answer = {};
  let cnt = 0;

  function dfs(p) {
    if (p.length > 5) return;

    answer[p] = cnt;
    cnt++;
    for (let w of "AEIOU") {
      dfs(p + w);
    }
  }

  dfs("");
  return answer[word];
}
