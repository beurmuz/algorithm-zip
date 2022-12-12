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
