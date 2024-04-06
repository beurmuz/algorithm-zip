/**
 * [구현]
 * - 문자열과 배열, 반복문을 적절히 이용해 풀면 된다.
 */

// 못풀어서 답 좀 찾아봤슴다
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution_a = (inputs) => {
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

solution_a(inputs);

// 답지 없이 다시 풀어보기!
const solution = (inputs) => {
  const [N, M] = inputs[0].split(" ").map((v) => +v);
  const roomsName = [];
  const rooms = {};

  // 룸 별 시간을 기록할 Array 저장하기
  for (let i = 1; i <= N; i++) {
    roomsName.push(inputs[i]);
    rooms[inputs[i]] = Array.from({ length: 9 }, () => 0);
    // [9, 10, 11, 12, 13, 14, 15, 16, 17]; (time-9)로 계산한다.
  }

  // 룸 이름으로 오름차순 정렬하기
  roomsName.sort();

  // 룸 별 사용하고 있는 시간 기록하기
  for (let i = N; i < inputs.length; i++) {
    let [room, start, end] = inputs[i].split(" ");
    for (let time = +start - 9; time < +end - 9; time++) {
      // 시작 시각이 9시이므로, 9시가 index 0에 올 수 있도록 맞춰준다.
      rooms[room][time] += 1;
    }
  }

  // -------------------
  // 출력하기 시작!
  for (let room = 0; room < roomsName.length; room++) {
    let roomName = roomsName[room];
    // 룸 이름 출력
    console.log(`Room ${roomName}:`);

    // 예약 가능한 시간대 개수와 예약 가능한 시간대 출력하기
    let timeTable = [];
    let start = -1; // 시작 시간 저장하기

    // 예약 가능한 시간을 찾는다.
    for (let time = 0; time < 9; time++) {
      // 만약 빈 시간(예약되지 않은 시간)이고, 시간이 0(9)시 이거나 이전 시간이 예약되어 있다면
      if (
        rooms[roomName][time] === 0 &&
        (time === 0 || rooms[roomName][time - 1] === 1)
      )
        start = time + 9; // 9시부터 시작이므로

      // 만약 현재가 예약된 시간이고 start가 -1이 아니라면, 예약 가능한 시간은 여기까지인 것
      if (rooms[roomName][time] === 1 && start !== -1) {
        timeTable.push(`${start === 9 ? "09" : start}-${time + 9}`);
        start = -1;
      }
    }
    // 배열의 마지막 원소가 0인 경우
    if (start !== -1) {
      timeTable.push(`${start === 9 ? "09" : start}-18`);
    }

    // 예약 가능한 시간이 없다면
    if (!timeTable.length) console.log("Not available");
    else {
      console.log(`${timeTable.length} available:`);
      console.log(timeTable.join("\n"));
    }
    if (room !== N - 1) console.log("-----");
  }
};

solution(inputs);
