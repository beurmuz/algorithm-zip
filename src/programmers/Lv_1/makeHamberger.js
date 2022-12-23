"use strict";

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
