"use strict";

/**
 * 1. 처음에 푼 풀이
 * stack을 이용해 push, pop하는 방법
 */
function solution(ingredient) {
  let answer = 0;
  let stack = [];

  // ingredient를 돌면서 1, 2, 3, 1인 경우를 찾는다.
  ingredient.forEach((now) => {
    // 일단 현재 재료(now)를 stack에 넣는다.
    stack.push(now);

    if (stack.length >= 4) {
      // stack의 맨 뒤 4개를 자른 뒤, join으로 문자열 형태로 이어 붙여준다.
      let fourIngredients = stack.slice(-4).join("");
      if (fourIngredients === "1231") {
        // 햄버거 하나가 만들어졌으므로, stack에서 pop을 4번 진행한다.
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        ++answer;
      }
    }
  });
  return answer;
}

/**
 * 2. for문을 이용한 풀이법
 * for문의 index를 이용해 푸는 방법
 */
function solution(ingredient) {
  let answer = 0;

  // ingredient 길이만큼 반복문을 돈다.
  for (let i = 0; i < ingredient.length; i++) {
    // i부터 i+4, 총 4개를 잘라서 join한 뒤, 그 값이 1231인지 확인한다.
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      // 맞으면 answer를 1 증가시키고, ingredient 배열에서 해당 지점(i) 부터 총 4개를 잘라낸다.
      answer++;
      ingredient.splice(i, 4);
      // 잘라냈으면 i가 다시 3개 줄어든 상태로 만들어준다.
      i -= 3;
    }
  }
  return answer;
}
