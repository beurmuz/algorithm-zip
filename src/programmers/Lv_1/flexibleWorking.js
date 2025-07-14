/**
 * 구현 문제
 *
 * 60m이 꽉차면 1h으로 바꿔주는 작업에서 시간이 좀 걸렸다.
 * '%'를 적극 활용하자!
 */

function solution(schedules, timelogs, startday) {
  let answer = 0; // 상을 받는 직원 수

  for (let p = 0; p < schedules.length; p++) {
    let ableTime = 0;
    // M 구하기 (50분 이상 시 H로 1 올려줘야함)
    if (schedules[p] % 100 >= 50) ableTime = 100 + (schedules[p] % 10);
    else ableTime = (schedules[p] % 100) + 10;

    // H 구하기
    ableTime = Math.floor(schedules[p] / 100) * 100 + ableTime;

    let day = startday;
    let able = true;
    // timelogs를 요일과 맞춰보며 지각한 날짜가 있는지 찾기
    for (let d = 0; d < timelogs[p].length; d++) {
      if (day === 6) {
        day += 1;
        continue;
      } else if (day === 7) {
        day = 1; // 일(7) -> 월(1)
        continue;
      }

      if (timelogs[p][d] > ableTime) {
        able = false;
        break;
      }
      day += 1;
    }
    if (able) answer += 1;
  }
  return answer;
}
