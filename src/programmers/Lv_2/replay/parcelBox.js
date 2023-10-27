/**
 * [stack 문제]
 */

function solution(order) {
  let answer = 0;
  let orderIdx = 0;
  const stack = [];

  for (let i = 1; i <= order.length; i++) {
    if (i === order[orderIdx]) {
      orderIdx++; // 다음 오더번호를 확인해야하므로
      answer++;
    } else {
      stack.push(i);
    }

    while (stack.length && stack.at(-1) === order[orderIdx]) {
      stack.pop(); // 마지막 값이 order와 같으므로 pop
      answer++;
      orderIdx++;
    }
  }
  return answer;
}
