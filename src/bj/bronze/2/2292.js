"use strict";

/**
 * 풀이법까지만 생각해낸 문제!
 *
 * 🙄 생각한 풀이법?
 * - 1, 2~7(6), 8~19(12), 20~37(18), ... 이렇게 6n씩 증가하고 있다.
 * 기준이 되는 1로부터 2~7은 2번만에, 8~19까지는 3번만에 이동이 가능하다.
 *
 * 그러므로, 범위는 1에서 증가하는 방만큼 계속 누적시켜주며 1,7(6), 19(12), 37(18), 61(24), ...
 * 범위에 따른 블록의 합이 입력받은 N보다 작을때까지 반복한다.
 */
let input = require("fs").readFileSync("/dev/stdin").toString();

function solution(input) {
  let range = 1;
  let block = 1;

  while (block < input) {
    block += 6 * range;
    // console.log(`block: ${block}, range: ${range}`)
    range++;
  }
  return range;
}

console.log(solution(+input));
