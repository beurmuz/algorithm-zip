"use strict";

function solution(want, number, discount) {
  let answer = 0;
  let shopping = new Map();

  // 생성된 map과 want, number를 비교하는 function
  function checker(tmpMap) {
    for (let i = 0; i < want.length; i++) {
      if (tmpMap.get(want[i]) !== number[i]) return;
    }
    answer++;
  }

  for (let i = 0; i < 10; i++) {
    if (shopping.has(discount[i]))
      shopping.set(discount[i], shopping.get(discount[i]) + 1);
    else shopping.set(discount[i], 1);
  }
  checker(shopping);

  // silding window
  for (let i = 10; i <= discount.length; i++) {
    shopping.set(discount[i - 10], shopping.get(discount[i - 10]) - 1);
    if (shopping.has(discount[i]))
      shopping.set(discount[i], shopping.get(discount[i]) + 1);
    else shopping.set(discount[i], 1);
    checker(shopping);
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);

console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
