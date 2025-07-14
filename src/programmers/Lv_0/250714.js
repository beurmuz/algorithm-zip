// ----------------------------------------------------------------------
/**
 * 🔍 종이 자르기 | △ | 27.07.14 🔍
 * - M*N 크기의 종이 1개를 M*N개의 종이로 만들어야 할 때, 가위질 1번에 종이의 개수가 1 늘어난다.
 *   -> 즉, M*N개의 종이를 만드려면 M*N-1 번 가위질을 해야함
 *
 * 최소 가위질 횟수 = (M - 1) + (N × (M - 1))
 *              = M × N - 1
 */
function solution(M, N) {
  return M * N - 1;
}

// ----------------------------------------------------------------------
/**
 * 🔍 코드 처리하기 | O | 27.07.14 🔍
 */
function solution(code) {
  let answer = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] === "1") mode = 1;
      else {
        if (i % 2 === 0) answer += code[i];
      }
    } else {
      if (code[i] === "1") mode = 0;
      else {
        if (i % 2 === 1) answer += code[i];
      }
    }
  }
  return answer === "" ? "EMPTY" : answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 다음에 올 숫자 | △ | 27.07.14 🔍
 */
function solution(common) {
  // 등차수열
  if (common[1] - common[0] === common[2] - common[1])
    return common[common.length - 1] + (common[1] - common[0]);
  // 등비수열
  else return common[common.length - 1] * (common[1] / common[0]);
}

// ----------------------------------------------------------------------
/**
 * 🔍 최빈값 구하기 | O | 27.07.14 🔍
 */
function solution(array) {
  if (array.length === 0) return -1; // 빈 배열 예외 처리
  if (array.length === 1) return array[0]; // 길이 1인 경우 처리

  const numMap = new Map();
  array.forEach((v) => {
    numMap.set(v, (numMap.get(v) || 0) + 1);
  });

  const answer = [...numMap].sort((a, b) => b[1] - a[1]);

  // 최빈값이 여러 개
  if (answer.length >= 2 && answer[0][1] === answer[1][1]) return -1;
  return answer[0][0];
}

// ----------------------------------------------------------------------
/**
 * 🔍 저주의 숫자 3 | △ | 27.07.14 🔍
 * - while문..
 */
function solution(n) {
  let ten = 1; // 10진수
  let three = 1; // 3x 마을 숫자

  while (true) {
    // 종료 조건
    if (ten === n + 1) return three - 1; // 방금 건너뛴 숫자가 포함되므로

    // 3x 마을 규칙에 맞지 않으면 skip
    while (three % 3 === 0 || String(three).includes("3")) {
      three++;
    }

    ten++;
    three++;
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 치킨 쿠폰 | △ | 27.07.14 🔍
 * - 서비스 치킨의 수를 '이번에 서비스 받을 치킨 수'를 누적해주어야 함
 */
function solution(chicken) {
  let coupon = chicken;
  let service = 0;

  while (coupon >= 10) {
    const newService = Math.floor(coupon / 10); // 이번에 서비스 받을 치킨
    service += newService;
    // 쿠폰의 수는 새롭게 갱신됨. 기존에 사용하고 남은 10장미만의 쿠폰 + 이번에 서비스 받은 치킨 개수로!
    coupon = (coupon % 10) + newService;
  }
  return service;
}

// ----------------------------------------------------------------------
/**
 * 🔍 OX 퀴즈 | O | 27.07.14 🔍
 */
function solution(quiz) {
  let answer = quiz.map((line) => {
    let [x, op1, y, op2, z] = line.split(" ");
    console.log(x, op1, y, op2, z);

    let realAnswer = 0;
    if (op1 === "+") {
      realAnswer = Number(x) + Number(y);
    } else if (op1 === "-") {
      realAnswer = Number(x) - Number(y);
    }

    if (realAnswer === Number(z)) return "O";
    else return "X";
  });

  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 OX 퀴즈 | O | 27.07.14 🔍
 */
function solution(board) {
  let answer = 0;

  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  let visited = board.slice();

  function checked(x, y) {
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (0 <= nx && nx < n && 0 <= ny && ny < n) visited[nx][ny] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) checked(i, j);
    }
  }

  visited.forEach((line) => {
    line.forEach((v) => {
      if (v === 0) answer++;
    });
  });

  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 안전지대 | O, 약간의 △ | 27.07.14 🔍
 */
function solution(board) {
  let answer = 0;
  let n = board.length;

  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  let visited = board.map((row) => [...row]);

  function checked(x, y) {
    visited[x][y] = 1; // 자신도 check
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        visited[nx][ny] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        checked(i, j);
      }
    }
  }

  visited.forEach((row) => {
    row.forEach((cell) => {
      if (cell === 0) answer++;
    });
  });

  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 겹치는 선분의 길이 | O | 27.07.14 🔍
 * - 음수값이 있는 경우를 고려해 크기를 201로 지정했지만, offset이 필요함을 잠시 간과했다!
 */
function solution(lines) {
  let answer = 0;
  let arr = Array(201).fill(0);
  const offset = 100;

  lines.forEach(([start, end]) => {
    for (let x = start; x < end; x++) {
      arr[x + offset]++;
    }
  });

  arr.forEach((v) => {
    if (v >= 2) answer++;
  });
  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 평행 | △ | 27.07.14 🔍
 * - 기울기를 구하는 2가지 방법
 *   1. (y2-y1) / (x2-x1) === (y4-y3) / (x4-x3)
 *   2. (y4-y3) * (x2-x1) === (y2-y1) * (x4-x3)  (사실 2번은 1번을 변형한 것 뿐.)
 */
function solution(dots) {
  const pairs = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  const getSlopeCompare = ([x1, y1], [x2, y2], [x3, y3], [x4, y4]) => {
    return (y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1);
  };

  for (let [a, b, c, d] of pairs) {
    if (getSlopeCompare(dots[a], dots[b], dots[c], dots[d])) return 1;
  }
  return 0;
}

// 또 다른 풀이
function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;
  return 0;
}

function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}
