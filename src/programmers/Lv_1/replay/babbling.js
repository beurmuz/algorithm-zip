/**
 * ✅ RegExp.prototype.exec() 는 JS에서 정규표현식을 다룰 때 쓴다.
 * - 인자로 받은 문자열 (str) 에서 match 를 찾아내고 result array 혹은 null 을 반환한다.
 * - [ 찾아낸 문자열, 시작점 인덱스, 원본 문자열, 그룹 ] 으로 표기된다.
 * - 실패 시 null을 반환한다.
 */

function solution(babbling) {
  const r1 = /(aya|ye|woo|ma)\1/;
  const r2 = /^(aya|ye|woo|ma)+$/;

  let answer = 0;

  for (let word of babbling) {
    let m1 = r1.exec(word);
    // console.log('m1', m1)
    if (m1) continue;

    let m2 = r2.exec(word);
    // console.log('m2', m2)
    if (!m2) continue;
    answer++;
  }
  return answer;
}
