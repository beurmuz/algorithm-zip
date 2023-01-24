"use strict";

/**
 * ✅ Set을 arr로 바꾸는 방법을 몰라서 헤맸다.
 * - Set을 만든 후, [...Object.values(set이름)]을 하면 된다.
 *
 * 만약 set이 { headgear: 2, eyewear: 1 } 이면,
 * - headgear를 입는 경우 2가지, 입지 않는 경우 1가지가 있고 => (2+1)
 * - eyewear를 입는 경우 1가지, 입지 않는 경우 1가지가 있다. => (1+1)
 * - 총 입을 수 있는 옷의 조합은 (2+1) * (1+1) = 6가지이다.
 * - 그러나 모두 입지 않는 경우가 있으므로 총 6-1 = 5가지이다.
 */
const [t, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (t, inputs) => {
  let tindex = 0;
  let answer = [];
  while (tindex !== inputs.length) {
    let wear = {};
    let n = +inputs[tindex];

    // 옷 종류에 따라 갯수를 센다.
    for (let i = 0; i < n; i++) {
      ++tindex;
      let itemSort = inputs[tindex].split(" ")[1];
      if (!wear[itemSort]) wear[itemSort] = 1;
      else wear[itemSort] = wear[itemSort] + 1;
    }
    tindex++;

    // wear의 value를 arr형태로 바꾼 뒤, 계산한다.
    const values = [...Object.values(wear)];
    let sum = 1;
    for (let value of values) {
      sum *= value + 1; // A종류의 옷을 입는 방법: value개 + A종류의 옷을 입지 않는 방법: 1개
    }
    answer.push(sum - 1); // 모든 옷을 입지 않는 방법1가지를 빼준다.
  }
  return answer.join("\n");
};

console.log(solution(+t, inputs));
