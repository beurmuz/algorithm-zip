/**
 * [완전탐색]
 * - 최대 입력값의 크기는 8000n이므로, 완탐으로도 풀 수 있었다.
 */

function solution(s, n) {
  let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let lowerAlpha = upperAlpha.map((v) => v.toLowerCase());
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let whichArr = s[i] === s[i].toUpperCase() ? upperAlpha : lowerAlpha;
    let newIdx = whichArr.indexOf(s[i]) + n;
    answer += whichArr[newIdx % 26];
  }
  return answer;
}
