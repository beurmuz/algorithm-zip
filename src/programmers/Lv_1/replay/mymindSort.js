/**
 * [정렬은 정렬인데.. 구현처럼 풀었다]
 */

function solution(strings, n) {
  let answer = strings;
  for (let i = 0; i < strings.length; i++) {
    answer[i] = strings[i][n] + strings[i];
  }

  answer.sort();
  return answer.map((strings) => strings.substring(1));
}

function solution(strings, n) {
  let answer = strings;
  for (let i = 0; i < strings.length; i++) {
    answer[i] = strings[i][n] + strings[i];
  }

  answer.sort();
  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].replace(answer[i][0], "");
  }

  return answer;
}
