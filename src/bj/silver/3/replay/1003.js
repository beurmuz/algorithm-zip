"use strict";

/**
 * 피보나치에 의하면 f(n) = f(n-1) + f(n-2)이다.
 * f(0) = 0이고, f(1) = 1 인 것에서 알 수 있듯이 [0의 개수, 1의 개수] 형태로 표현하자면
 * f(0) = [1, 0], f(1) = [0, 1]이다.
 *
 * f(2)는 f(1) + f(0) 이므로 [0, 1] + [1, 0] => [1, 1]이 된다.
 * f(3)은 f(2) + f(1) = [1, 1] + [0, 1] = [1, 2]이다.
 *
 * => 이렇게 0의 개수와 1의 개수를 각각 더해 구할 수 있다. 그런데 이에는 규칙이 있다.
 *
 * f(0) = [1, 0]
 * f(1) = [0, 1]
 * f(2) = [1, 1]
 * f(3) = [1, 2]
 * f(4) = [2, 3]
 * f(5) = [3, 5]
 * f(6) = [5, 8]
 * f(7) = [8, 13]
 *
 * 규칙이 보이는가?
 * 즉, f(n)의 0의 개수는 f(n-1)의 1의 개수와 같고, f(n)의 1의 개수는 f(n-1)의 0의개수 + 1의개수 인 것이다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
const n = inputs.shift();

function solution(n, inputs) {
  for (let i = 0; i < n; i++) {
    // 주어진 테스트케이스만큼 반복문을 순회한다.
    let one = 0;
    let zero = 1;

    for (let j = 1; j <= inputs[i]; j++) {
      const tmp = zero;
      zero = one; // one을 zero에 저장한다.
      one = tmp + one; // one은 결국 zero + one과 같다.
    }
    console.log(zero + " " + one);
  }
}

solution(+n, inputs);
