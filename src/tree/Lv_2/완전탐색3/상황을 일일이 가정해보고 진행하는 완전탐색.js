// ----------------------------------------------------------------------
/**
 * 🔍 잘 모르는 상황에서의 완전탐색 | O | 24.07.10
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
let answer = 0;

for (let n = 1; n < 10; n++) {
  let num = n;
  let count = 0;

  while (num !== 1) {
    if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;

    count += 1;
  }
  answer = Math.max(answer, count);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 야바위 | O | 24.07.10
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const changes = inputs
  .slice(1)
  .map((line) => line.split(" ").map((v) => Number(v) - 1));

let answer = 0;
for (startSpot = 0; startSpot < 3; startSpot++) {
  // startSpot은 가장 처음에 조약돌을 놓는 위치
  let arr = Array(3).fill(0);
  arr[startSpot] = 1; // 조약돌이 있는 곳은 1로 해준다.
  let count = 0;

  for (let n = 0; n < N; n++) {
    // 총 N번 뒤집는다.
    [arr[changes[n][0]], arr[changes[n][1]]] = [
      arr[changes[n][1]],
      arr[changes[n][0]],
    ];
    if (arr[changes[n][2]] === 1) count += 1;
  }
  answer = Math.max(answer, count);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 중첩 완전탐색 | O | 24.07.10
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
const N = 5;

let arr = [1, 5, 2, 6, 8];
let answer = 0;

// square: 2배 할 숫자
for (let square = 0; square < N; square++) {
  arr[square] *= 2;

  // excep: 제외할 숫자
  for (let excep = 0; excep < N; excep++) {
    let tmp = [];
    for (let i = 0; i < N; i++) {
      if (i === excep) continue;
      tmp.push(arr[i]);
    }

    let sumDiff = 0;
    for (let i = 0; i < N - 2; i++) {
      sumDiff += Math.abs(tmp[i] - tmp[i + 1]);
    }
    answer = Math.max(answer, sumDiff);
  }
  arr[square] /= 2;
}
console.log(answer);




// ----------------------------------------------------------------------
/**
 * 🔍 숫자 2배 후 하나 제거하기 | O | 24.07.10
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(inputs[0]);
let arr = inputs[1].split(" ").map(Number);

let answer = Number.MAX_SAFE_INTEGER;

// square: 2배 할 숫자
for(let square = 0; square < N; square++) {
    arr[square] *= 2;
    
    // excep: 제외할 숫자
    for(let excep = 0; excep < N; excep++) {
        let tmp = [];
        for(let i = 0; i < N; i++) {
            if(i === excep) continue;
            tmp.push(arr[i]);
        }

        let sumDiff = 0;
        for(let i = 0; i < N - 2; i++) {
           sumDiff += Math.abs(tmp[i] - tmp[i + 1]);
        }
        answer = Math.min(answer, sumDiff);
    }
    arr[square] /= 2;
}
console.log(answer);