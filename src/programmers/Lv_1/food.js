"use strict";

// 1. 내가 푼 풀이
function solution(food) {
  let answer = "0";

  for (let i = food.length - 1; i >= 0; i--) {
    let calorie = i.toString();
    const repeatedFood = calorie.repeat(parseInt(food[i] / 2));
    answer = repeatedFood + answer + repeatedFood;
  }
  return answer;
}

// 2. 남이 푼 풀이
function solution(food) {
  return food.reverse().reduce((acc, cur, idx) => {
    const calorie = (food.length - idx - 1).toString();
    const repeatedFood = calorie.repeat(parseInt(cur / 2));
    return repeatedFood + acc + repeatedFood;
  }, "0");
}

// 3. 또 다른 풀이
function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(food[i] / 2);
  }
  return res + "0" + [...res].reverse().join("");
}
