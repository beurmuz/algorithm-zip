/**
 * commands를 순회하기 전, 오프닝인지 검사하는 로직을 추가하지 않아 계속 에러가 났었다.
 */

function solution(video_len, pos, op_start, op_end, commands) {
  const timeToSec = (str) => {
    const [m, s] = str.split(":").map(Number);
    return m * 60 + s;
  };

  const total_len = timeToSec(video_len);
  let now_pos = timeToSec(pos);
  const total_op_start = timeToSec(op_start);
  const total_op_end = timeToSec(op_end);

  const isOpeningTime = (time) => {
    if (total_op_start <= now_pos && now_pos <= total_op_end) return true;
    return false;
  };

  // 일단 오프닝인지 먼저 검사한 후 로직 실행하기
  if (isOpeningTime(now_pos)) now_pos = total_op_end;
  commands.forEach((command) => {
    if (command === "prev") now_pos = Math.max(0, now_pos - 10);
    else if (command === "next") now_pos = Math.min(total_len, now_pos + 10);

    if (isOpeningTime(now_pos)) now_pos = total_op_end;
  });

  // mm:ss 형태로 변환하는 함수
  const secToTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  return secToTime(now_pos);
}
