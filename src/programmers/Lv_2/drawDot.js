"use strict";

/**
 * 음... 그냥 수학 문제인거 같다
 */
const solution = (k, d) => {
  let answer = 0;

  for (let x = 0; x <= d; x += k) {
    // k씩 늘어난다
    // 원의 방정식으로 x좌표에 대한 y의 최댓값을 구한다.
    // 최댓값이 y인 좌표 내부에 찍을 수 있는 점의 개수는 소수 점을 제거한 y/k+1 값과 같다. => k의 배수이기에 k로 나누고, 0을 포함하기 위해 +1
    let y = parseInt(Math.sqrt(d ** 2 - x ** 2));
    // y좌표 내부로 찍을 수 있는 점의 개수
    answer += parseInt(y / k) + 1;
  }
  return answer;
};

console.log(solution(2, 4));
