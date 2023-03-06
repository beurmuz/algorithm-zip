"use strict";

/**
 * 1. permutation + dfs를 이용한 문제 풀이
 *   - 정확성 63.2, 효율성 0.0이 나와 오답으로 간주된다. (총 63.2 / 100.0)
 */
function solution(n, k) {
  let permutationList = [];
  let checked = Array.from({ length: n + 1 }, () => 0); // 방문여부를 체크할 배열을 선언한다.
  let tmp = Array.from({ length: n }, () => 0); // 총 n칸의 배열을 만들어놓는다.

  // dfs를 이용하면 사전순대로 자동 나열이 된다.
  const dfs = (L) => {
    if (L === n) {
      // 총 n개 뽑았다면
      permutationList.push(tmp.slice()); // 현재 값을 복사해서 넣는다.
      if (permutationList.length === k) return; // 만약 permutationList의 길이가 k와 같다면, k번째 값을 찾은것이므로 return한다.
    } else {
      for (let i = 1; i <= n; i++) {
        // 1~n까지 순회하면서
        if (checked[i] === 0) {
          // 아직 방문하지 않았다면
          checked[i] = 1; // 방문 표시를 하고
          tmp[L] = i; // tmp[L]자리에 현재 i값을 넣어준다.
          dfs(L + 1); // L+1한 값을 인자로 넘기고
          checked[i] = 0; // 빠져나오면 다시 0으로 바꿔준다. (백트래킹)
        }
      }
    }
  };
  dfs(0);
  return permutationList[k - 1];
}

/**
 * 2. 답안을 참고한 코드
 *   - 핵심은 순열을 이용한 풀이 + 시간 단축 + 메모리 낭비 줄이기!
 *   - k번째 순열만 빠르게 구할수 있는 방법을 알아야 한다
 *
 * 문제 접근방법 🔑
 * - n=3, k=5일때 줄을 세울 수 있는 경우의 수는 총 6개로, 경우의 수를 구할 때 팩토리얼로 구할 수 이유을 생각하며 문제를 풀어보자.
 *  - 1이 첫번째 자리에 오는 경우의 수는 2개 (1, 2, 3) (1, 3, 2)
 *  - 2가 첫번째 자리에 오는 경우의 수는 2개 (2, 1, 3) (2, 3, 1)
 *  - 3이 첫번쨰 자리에 오는 경우의 수는 2개 (3, 1, 2) (3, 2, 1)
 * => 사전순 나열 시 5번째 자리에 오는 수는 3이 첫번째 자리에 존재하는 경우에서 찾을 수 있다.
 */

function solution(n, k) {
  const answer = [];
  const people = Array.from({ length: n }, (_, i) => i + 1); // 1~n까지의 숫자를 담은 배열을 생성한다.
  let caseNum = people.reduce((acc, v) => acc * v, 1); // n!

  while (answer.length < n) {
    // answer.length가 n이 되는 순간 반복문이 종료된다.
    // caseNUm을 people 배열의 길이로 나누어 현재 넣을 자리에 숫자가 입력되었을 때 다음번에 나올 수 있는 경우의 수를 구하고,
    caseNum = caseNum / people.length; // 6/3 => 2 ...
    // k는 1부터 시작하므로 index를 이용해 계산하기 위해 -1을 뺀 값에 caseNum을 나누고
    // 해당 값의 내림값 index에 해당하는 people 배열의 요소가 현재 넣을 자리에 들어갈 숫자가 되므로
    // splice를 이용해 people에서 제거하고 answer에 담아준다.
    answer.push(...people.splice(Math.floor((k - 1) / caseNum), 1));
    // k를 caseNum으로 나눈 나머지 값은 현재 넣을 자리에 들어갈 숫자를 제외하고 남은 사람들을 줄 세우는 방법 중 몇번째 인지에 대한 값이므로 k를 해당값으로 변경해준다.
    k = k % caseNum;
  }

  return answer;
}
