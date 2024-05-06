/**
 * [그리디, 우선순위큐]
 * - 예전에 풀어본 문제인데 알고보니 복습 안해서 또 못 푼 거였다. 왜 이건 복습을 안했담?!?!? 반성해@
 */

// 처음에 푼 풀이 (실패!)
const [N, ...classes] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, classes) => {
  N = +N;
  classes = classes.map((line) => line.split(" ").map((v) => +v));

  let answer = 0;
  classes = classes.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let nowEnd = classes[0][1];

  for (let i = 1; i < N; i++) {
    if (classes[i][0] <= nowEnd) {
      answer++;
      nowEnd = classes[i][1];
    }
  }
  return answer;
};

console.log(solution(N, classes));

// 다시 푼 풀이법 - 메모리 초과 발생 (백준 문제랑 똑같은데 메모리 초과가 발생한다.)
const [N, ...classes] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, classes) => {
  N = +N;
  classes = classes.map((v) => v.split(" ").map((vv) => +vv));
  let answer = 0;
  let classroom = 0;
  const obj = [];

  for (let i = 0; i < N; i++) {
    obj.push({ time: classes[i][0], start: 1 }); // 시작 시간 저장
    obj.push({ time: classes[i][1], start: -1 }); // 끝 시간 저장
  }

  obj.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time)); // 시간이 같으면 시작시간 순서로 정렬하고, 아니면 시간순(오름차순)으로 정리한다.

  obj.forEach((schedule) => {
    if (schedule.start === -1) classroom -= 1; // 끝나는 시간이면 -1을 해준다.
    else if (schedule.start === 1) classroom += 1; // 시작 시간이면 +1을 해준다.

    answer = classroom > answer ? classroom : answer; // 최소한의 강의실 개수는 동시대에 존재하는 최대 강의실 수를 구하면 알 수 있다.
  });
  return answer;
};

console.log(solution(N, classes));
