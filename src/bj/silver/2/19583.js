/**
 * [해시 문제]
 * 시간을 시, 분 단위로 쪼개지 않고 '시간*100 + 분'을 해줌으로써 문제 푸는 방법을 쉽게 만든다.
 */

const [inputs, ...logs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, logs) => {
  const [S, E, Q] = inputs.split(" ").map(
    (element) =>
      element
        .split(":")
        .map(Number)
        .reduce((a, b) => a * 100 + b) // 각각을 시간*100 + 분으로 바꿔준다.
  );

  let inOutLog = new Set();
  let answer = 0;

  for (let i = 0; i < logs.length; i++) {
    let [logTime, name] = logs[i].split(" ");
    logTime = logTime
      .split(":")
      .map(Number)
      .reduce((a, b) => a * 100 + b);

    if (logTime <= S) {
      // 개강총회 시작 전 입장한 경우
      inOutLog.add(name);
    } else if (logTime >= E && logTime <= Q && inOutLog.has(name)) {
      // 개강 총회가 끝나는 시간과 스트리밍이 끝나는 시간 사이에 있고, 입장한 기록이 있다면
      answer++;
      inOutLog.delete(name);
    }
  }

  return answer;
};

console.log(solution(inputs, logs));
