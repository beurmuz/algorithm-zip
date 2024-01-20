/**
 * [Stack, 스택 문제]
 * - 최대 입력값의 크기가 10^5이므로 O(n)이하가 되도록 풀어야한다.
 * - 인덱스를 stack에 넣었다 뺐다 하는게 아직 조금 헷갈려하는 듯 하다. 바보인가..
 */

function solution(prices) {
  const answer = Array.from({ length: prices.length }, () => 0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    // prices[i]: 현재 값, prices[stack[stack.length - 1]]: 이전 값
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let moreUpIdx = stack.pop();
      answer[moreUpIdx] = i - moreUpIdx;
    }
    stack.push(i);
  }

  // stack의 남은 값들도 처리해주어야 한다.
  while (stack.length) {
    let moreUpIdx = stack.pop();
    answer[moreUpIdx] = prices.length - moreUpIdx - 1;
  }
  return answer;
}
