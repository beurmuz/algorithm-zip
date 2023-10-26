/**
 * [구현]
 * - 정확도 40..
 * - 예외 처리의 중요성을 깨닫다..
 */

function solution(today, terms, privacies) {
  // 1. 날짜 쪼개기
  let TODAY = today.split(".").map((v) => +v);

  // 2. terms => map
  const termsMap = new Map();
  terms.forEach((line) => {
    let [type, session] = line.split(" ");
    termsMap.set(type, +session);
  });

  // 3. privacies를 돌면서 파기해야할 개인정보 목록 찾기
  // terms는 무조건 1달 단위로 되어있다. 1달은 28일로 간주한다.
  let privaciesResult = privacies.map((line, idx) => {
    let [START, appointment] = line.split(" ");
    START = START.split(".").map((v) => +v);

    // 계약기간 파기일을 구한다.
    let plusMonth = termsMap.get(appointment);
    let D = START[2] - 1 === 0 ? 28 : START[2] - 1;
    let M = D === 28 ? START[1] + plusMonth - 1 : START[1] + plusMonth;
    let Y = M > 12 ? START[0] + parseInt(M / 12) : START[0];
    if (M > 12) M = M % 12;

    // 파기일이 오늘보다 이전이면
    return new Date(`${Y}-${M}-${D}`) <
      new Date(`${TODAY[0]}-${TODAY[1]}-${TODAY[2]}`)
      ? idx + 1
      : null;
  });
  return privaciesResult.filter((v) => v != null);
}
