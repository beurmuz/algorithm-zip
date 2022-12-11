"use strict";

function solution(food) {
  return food.reverse().reduce((acc, cur, idx) => {
    const calorie = (food.length - idx - 1).toString();

    const repeatedFood = calorie.repeat(parseInt(cur / 2));

    return repeatedFood + acc + repeatedFood;
  }, "0");
}
