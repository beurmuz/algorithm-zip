/**
 * [단순 구현]
 */

function solution(food) {
  let answer = "0";

  for (let i = food.length - 1; i >= 0; i--) {
    let cal = i.toString();
    const repeatFood = cal.repeat(parseInt(food[i] / 2));
    answer = repeatFood + answer + repeatFood;
  }
  return answer;
}
