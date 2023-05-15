"use strict";

const solution = (keymap, targets) => {
  return targets.map((word) => {
    let pressKey = 0;
    word.split("").forEach((char, index) => {
      let count = Infinity;
      keymap.forEach((key) => {
        let idx = key.indexOf(char);
        if (idx > -1) count = Math.min(count, idx + 1); // 최소한의 횟수를 넣는다.
      });
      pressKey += count; // pressKey를 누적합하여
    });
    return pressKey === Infinity ? -1 : pressKey;
  });
};

// 다른 풀이
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
