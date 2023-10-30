/**
 * [투포인터]
 * - 문제 분류는 그리디로 되어있는데, sort하는 것 때문에 그런 것 같다.
 * - 중요한건 lt와 rt가 같다는건 하나가 남는 경우라서 따로 체크해주어야 한다는 것이다.
 */

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let [lt, rt] = [0, people.length - 1];

  while (lt <= rt) {
    if (lt === rt) {
      answer++;
      break;
    }

    let sum = people[lt] + people[rt];

    if (sum > limit) {
      answer++;
      lt++;
    } else {
      // limit보다 작거나 같은 경우에는 두명이 하나의 구명보트를 이용하면 되는 것이므로 answer를 하나 증가시키고, 두 개의 포인터도 옮겨주면 된다.
      answer++;
      lt++;
      rt--;
    }
  }
  return answer;
}
