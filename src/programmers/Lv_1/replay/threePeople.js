/**
 * [dfs, 백트래킹 문제]
 * - 엄청 오랜만에 푸는 유형이다. L은 레벨을 말한다. L이 3이라는 것은, 이미 3의 번호를 더했다는 것이다.
 * - 이미 카운트한 학생은 또 카운트할 수 없으므로 체크 표시를 통해 구분지어야하며, 같은 번호를 또 고를 순 없으므로 반복문의 시작점을 인자로 받아온 index로 지정해주어야 한다.
 */

function solution(number) {
  let answer = 0;
  let checked = Array.from({ length: number.length }, () => false); // 방문여부 표시

  function dfs(L, index) {
    if (L === 3) {
      let sum = 0;
      for (let j = 0; j < checked.length; j++) {
        if (checked[j]) sum += number[j];
      }
      answer += sum === 0 ? 1 : 0;
      return;
    }

    for (let i = index; i <= number.length; i++) {
      if (checked[i]) continue;
      checked[i] = true;
      dfs(L + 1, i);
      checked[i] = false;
    }
  }
  dfs(0, 0);
  return answer;
}
