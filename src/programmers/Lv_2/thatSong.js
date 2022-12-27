"use strict";

/** 1. 해설
 * m: 네오가 기억한 멜로디를 담은 문자열
 * musicinfos: [음악 시작시각, 끝난 시각, 음악 제목, 악보 정보]
 * 시작시각, 끝난 시각은 HH:MM형식
 * 제목은 문자열
 * 각 음은 1분에 1개씩 재생된다.
 */
function solution(m, musicinfos) {
  const arr = musicinfos.map((mi) => {
    // 입력 배열의 문자열 각각에 대해 수행한다.
    const [start, end, title, code] = mi.split(","); // 문자열에서 ,를 구분자로 각 정보를 분리
    const hour = end.slice(0, 2) - start.slice(0, 2); // 문자열의 0~1번째 문자는 시간
    const minute = end.slice(3) - start.slice(3); // 문자열의 3~4번째 문자는 분
    const runtime = 60 * hour + minute; // 총 재생 시간

    const codeArr = code.match(/[A-Z]#?/g); // 알파벳, 알파벳#를 찾아 각각 배열의 인덱스에 분리한다.
    let stream = code.repeat(Math.floor(runtime / codeArr.length)); // 곡이 반복된 수 n만큼 악보 정보를 더한다.
    stream += codeArr.slice(0, runtime % codeArr.length).join(""); // 재생 도중에 멈춘 시점의 음까지를 추가로 더해준다.
    return [title, runtime, stream]; // 음악 제목, 총 재생 시간, 재생된 음 정보를 반환한다.
  });

  // 다음의 filter 함수는 조건을 충족하는(return true하는) 원소만 출력하는 함수
  const answer = arr.filter(([_, __, stream]) => {
    // 각각의 결과 배열에 대해 다음을 수행한다.
    let i = stream.indexOf(m); // 재생된 음 정보에 문자열 m이 포함되었는지 검사한다.
    if (i === -1) return false; // 포함되어있지 않다면 넘어간다.
    while (i !== -1) {
      // 포함되어 있다면
      if (stream[i + m.length] !== "#") return true;
      i = stream.indexOf(m, i + 1);
      // 찾은 문자 뒤에 #이 없다면 배열 정보를 그대로 반환한다.
      // ( stream = ABC#EFG 일 때 m= ABC를 찾을 수 있다.)
      // 찾은 문자 뒤에 #이 있다면 정답이 아니므로, 찾은 문자 뒤에 m과 일치하는 문자가 있는지 찾아야 한다.
    }
  });
  if (!answer.length) return "(None)"; // answer 배열에 원소가 없다면 조건에 일치하는 음악이 없는 것.

  answer.sort((a, b) => {
    if (a[1] === b[1]) return 0;
    return b[1] - a[1];
  }); // 1번 인덱스(총 재생수)가 같다면 순서를 유지하고, 같지 않다면 내림차순 정렬한다.
  return answer[0][0]; // 입력 순서 + 내림차순을 반영했으므로 배열의 첫번째 원소의 제목이 정답이다.
}
