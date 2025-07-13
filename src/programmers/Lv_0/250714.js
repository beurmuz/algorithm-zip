// ----------------------------------------------------------------------
/**
 * 🔍 종이 자르기 | △ | 27.07.14 🔍
 * - M*N 크기의 종이 1개를 M*N개의 종이로 만들어야 할 때, 가위질 1번에 종이의 개수가 1 늘어난다.
 *   -> 즉, M*N개의 종이를 만드려면 M*N-1 번 가위질을 해야함
 *
 * 최소 가위질 횟수 = (M - 1) + (N × (M - 1))
 *              = M × N - 1
 */
function solution(M, N) {
  return M * N - 1;
}

// ----------------------------------------------------------------------
/**
 * 🔍 코드 처리하기 | O | 27.07.14 🔍
 */
function solution(code) {
  let answer = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] === "1") mode = 1;
      else {
        if (i % 2 === 0) answer += code[i];
      }
    } else {
      if (code[i] === "1") mode = 0;
      else {
        if (i % 2 === 1) answer += code[i];
      }
    }
  }
  return answer === "" ? "EMPTY" : answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 다음에 올 숫자 | △ | 27.07.14 🔍
 */
function solution(common) {
  // 등차수열
  if (common[1] - common[0] === common[2] - common[1])
    return common[common.length - 1] + (common[1] - common[0]);
  // 등비수열
  else return common[common.length - 1] * (common[1] / common[0]);
}

// ----------------------------------------------------------------------
/**
 * 🔍 최빈값 구하기 | O | 27.07.14 🔍
 */
function solution(array) {
  if (array.length === 0) return -1; // 빈 배열 예외 처리
  if (array.length === 1) return array[0]; // 길이 1인 경우 처리

  const numMap = new Map();
  array.forEach((v) => {
    numMap.set(v, (numMap.get(v) || 0) + 1);
  });

  const answer = [...numMap].sort((a, b) => b[1] - a[1]);

  // 최빈값이 여러 개
  if (answer.length >= 2 && answer[0][1] === answer[1][1]) return -1;
  return answer[0][0];
}
