/**
 * [구현]
 * - 처리해주어야할 것들이 너무 많아서 ..
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [N, M] = inputs[0].split(" ").map((v) => +v);
  const roomsName = [];
  const rooms = {};

  for (let i = 1; i <= N; i++) {
    roomsName.push(inputs[i]);
    rooms[inputs[i]] = new Array(9).fill(0);
  }

  roomsName.sort();

  // 각 회의실에 예약된 시간에 +1 해주기
  for (let i = N + 1; i < inputs.length; i++) {
    let [room, start, end] = inputs[i].split(" ");
    for (let time = +start - 9; time < +end - 9; time++) {
      rooms[room][time] += 1;
    }
  }

  // 출력하기
  for (let num = 0; num < N; num++) {
    // 1) 룸 이름 출력
    let room = roomsName[num];
    console.log(`Room ${room}:`);

    // 2) 예약 가능 시간 출력
    let reserved_check = rooms[room];
    let cnt = 0; // 예약 가능한 시간대 개수
    let start = -1; // 0이 시작하는 시간
    let available_times = []; // 예약 가능한 시간을 저장하는 배열

    for (let i = 0; i < reserved_check.length; i++) {
      // 예약 가능한 시간대 시작 시간 찾기
      if (reserved_check[i] === 0 && (i === 0 || reserved_check[i - 1] === 1))
        start = i + 9;

      // 예약 가능한 시간대 추가 및 cnt에 1 더하기
      if (reserved_check[i] === 1 && start !== -1) {
        available_times.push(
          `${String(start).padStart(2, "0")}-${String(i + 9).padStart(2, "0")}`
        );
        start = -1;
        cnt++;
      }
    }

    // 배열의 마지막 원소가 0인 경우 처리
    if (start !== -1) {
      available_times.push(`${String(start).padStart(2, "0")}-18`);
      cnt++;
    }

    // 예약 가능한 시간이 없는 경우
    if (!cnt) console.log("Not available");
    // 예약 가능한 시간이 있는 경우
    else {
      console.log(`${cnt} available:`);
      available_times.forEach((e) => console.log(e));
    }

    // 3) 구분선 출력
    if (num !== N - 1) console.log("-----");
  }
};

solution(inputs);
