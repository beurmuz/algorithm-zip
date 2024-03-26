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

/**
 * 24.03.24 오랜만에 복습!
 * - 위의 코드에서는 L===3일때 sum을 계산해주었지만, 이번에 코드를 설계할 때에는 sum에 바로바로 학생의 number를 더했다 뺐다로 구현했다.
 */
const solution = (number) => {
  let answer = 0;
  // ✅ 백트래킹의 핵심은 방문여부를 알아야 하며, 현재 idx를 알고 해당 idx부터 연산을 진행한다는 것이다.
  const visited = Array.from({ length: number.length - 1 }, () => false);

  // L: 학생 수
  // sum: 학생들의 숫자를 더한 값
  // idx: 현재 학생의 index 번호
  const dfs = (L, sum, idx) => {
    if (L === 3) {
      if (sum === 0) answer++;
      return;
    }

    for (let i = idx; i < number.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      sum += number[i];
      dfs(L + 1, sum, i);
      sum -= number[i];
      visited[i] = false;
    }
  };
  dfs(0, 0, 0);
  return answer;
};
