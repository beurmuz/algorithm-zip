/**
 * [구현, 수학문제]
 * -
 */

function solution(k, d) {
  let answer = 0;

  // 원점(0, 0)으로부터 x축 방향으로 a*k(a = 0, 1, 2, 3 ...)
  // 원점과 거리가 d를 넘는 위치에는 점을 찍지 않아야하므로 x를 d까지만 반복한다.
  for (let x = 0; x <= d; x += k) {
    // y축 방향으로 b*k(b = 0, 1, 2, 3 ...)만큼 떨어진 위치에 점을 찍습니다.
    let y = parseInt(Math.sqrt(d ** 2 - x ** 2));
    answer += parseInt(y / k + 1);
  }
  return answer;
}
