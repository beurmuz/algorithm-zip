/**
 * 🔍 배열로 사각형 만들기 | O | 24.05.14 🔍
 *
 * [구현]
 */
const solution = () => {
  const arr = Array.from({ length: 5 }, () => Array(5).fill(1));
  console.log(arr[0].join(" "));
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
    console.log(arr[i].join(" "));
  }
};

solution();

// ----------------------------------------------------------------------
/**
 * 🔍 파스칼의 삼각형 | O | 24.05.14 🔍
 *
 * [구현]
 */
const N = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = (N) => {
  let pascals = Array.from({ length: N }, (v, i) => Array(++i).fill(1));

  // 파스칼의 삼각형 만들기
  for (let i = 0; i < N; i++) {
    if (i === 0 || i === 1) {
      console.log(pascals[i].join(" "));
      continue;
    }
    // 파스칼의 삼각형은 i = 2일때 시작된다.
    for (let j = 1; j < i; j++) {
      pascals[i][j] = pascals[i - 1][j - 1] + pascals[i - 1][j];
    }
    console.log(pascals[i].join(" "));
  }
};

solution(+N);


// ----------------------------------------------------------------------
/**
 * 🔍 격자로 사각형 만들기 | O | 24.05.14 🔍
 *
 * [구현]
 */
const N = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = (N) => {
    const arr = Array.from({ length: N }, () => Array(N).fill(1));

    for(let i = 0; i < N; i++) {
        if(i === 0) {
            console.log(arr[i].join(" "));
            continue;
        }
        // i가 1부터 연산 시작
        for(let j = 1; j < N; j++) {
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j] + arr[i][j-1];
        }
        console.log(arr[i].join(" "));
    }
}

solution(+N);