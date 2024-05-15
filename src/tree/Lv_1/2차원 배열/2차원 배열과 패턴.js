/**
 * 🔍 옆으로 사각형 채우기 | O | 24.05.10 🔍
 *
 * [구현]
 */
const N = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (N) => {
  let num = 1;
  for (let i = 0; i <= N; i++) {
    let line = [];
    for (let j = 0; j < N; j++) {
      line.push(num);
      num += 1;
    }
    console.log(line.join(" "));
  }
};

solution(+N);

// ----------------------------------------------------------------------
/**
 * 🔍 아래로 사각형 채우기 | O | 24.05.10 🔍
 *
 * [구현]
 */
const N = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (N) => {
  for (let i = 1; i <= N; i++) {
    let line = [];
    for (let j = 0; j < N; j++) {
      line.push(i + N * j);
    }
    console.log(line.join(" "));
  }
};

solution(+N);

// ----------------------------------------------------------------------
/**
 * 🔍 지그재그로 숫자 채우기 | O | 24.05.10 🔍
 *
 * [구현]
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (N, M) => {
  for (let i = 0; i < N; i++) {
    let line = [];
    for (let j = 0; j < M; j++) {
      if (j % 2 === 0) {
        // 짝수번째 자리 (원래대로)
        line.push(i + N * j);
      } else {
        // 홀수번째 자리 (거꾸로)
        line.push(N * (j + 1) - i - 1);
      }
    }
    console.log(line.join(" "));
  }
};

solution(N, M);

// ----------------------------------------------------------------------
/**
 * 🔍 대각선으로 숫자 채우기 | X | 24.05.13-14 🔍
 *
 * [구현]
 *
 * ✅ 핵심은 같은 대각선끼리 위치정보의 합이 같다는 것이다.
 * - 각각의 대각선의 합이 같은 구간에 다음 숫자 (num)을 넣어야 하므로 가장 바깥에 반복문을 하나 더 추가해주면 된다.
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (N, M) => {
  let num = 1;
  let answer = Array.from({ length: N }, () => Array(M).fill(0));

  // 같은 대각선끼리 (i, j)의 합이 같다.
  for (let sum = 0; sum < N + M; sum++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (sum === i + j) {
          answer[i][j] = num;
          num += 1;
        }
      }
    }
  }

  // 출력
  for (let i = 0; i < N; i++) {
    console.log(answer[i].join(" "));
  }
};

solution(N, M);

// ----------------------------------------------------------------------
/**
 * 🔍 격자 반대로 채우기 | O | 24.05.14 🔍
 *
 * [구현]
 *
 * ✅ 핵심은 같은 대각선끼리 위치정보의 합이 같다는 것이다.
 * - 각각의 대각선의 합이 같은 구간에 다음 숫자 (num)을 넣어야 하므로 가장 바깥에 반복문을 하나 더 추가해주면 된다.
 * - 처음에 푼 풀이는 N의 홀짝 여부에 따른 조건을 설정하지 않아 통과하지 못했다.
 */
// 두번째 풀이 (정답) - 174ms, 15MB
const N = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = (N) => {
  const arr = Array.from({ length: N }, () => Array(N).fill(0));

  let num = 1;
  for (let i = N - 1; i >= 0; i--) {
    if (N % 2 === 0) {
      // N이 짝수일 때
      if (i % 2 === 1) {
        for (let j = N - 1; j >= 0; j--) {
          arr[j][i] = num;
          num += 1;
        }
      } else {
        for (let j = 0; j < N; j++) {
          arr[j][i] = num;
          num += 1;
        }
      }
    } else {
      // N이 홀수일 때
      if (i % 2 === 0) {
        for (let j = N - 1; j >= 0; j--) {
          arr[j][i] = num;
          num += 1;
        }
      } else {
        for (let j = 0; j < N; j++) {
          arr[j][i] = num;
          num += 1;
        }
      }
    }
  }

  // 출력
  for (let i = 0; i < N; i++) {
    console.log(arr[i].join(" "));
  }
};

solution(+N);

// 다른 풀이 - 211ms, 47MB
// : (n-1)에서 열의 번호를 빼서, 가장 오른쪽 줄부터 위로 증가하는 방향으로 채워 나가기
const solution = (N) => {
  const arr = Array.from({ length: N }, () => Array(N).fill(0));

  let num = 1;
  for (let i = N - 1; i >= 0; i--) {
    if ((N - 1 - i) % 2 === 0) {
      // 아래 -> 위
      for (let j = N - 1; j >= 0; j--) {
        arr[j][i] = num;
        num += 1;
      }
    } else {
      for (let j = 0; j < N; j++) {
        arr[j][i] = num;
        num += 1;
      }
    }
  }

  // 출력
  for (let i = 0; i < N; i++) {
    console.log(arr[i].join(" "));
  }
};
