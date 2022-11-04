"use strict";

function solution(s) {
  let answer = 0;
  let numberStack = [];

  for (let x of s) {
    if (!isNaN(x)) numberStack.push(x);
    else {
      let right = numberStack.pop() * 1;
      let left = numberStack.pop() * 1;
      switch (x) {
        case "+":
          numberStack.push(left + right);
          break;
        case "-":
          numberStack.push(left - right);
          break;
        case "*":
          numberStack.push(left * right);
          break;
        case "/":
          numberStack.push(left / right);
          break;
      }
      answer = numberStack[0];
    }
  }
  return answer;
}

let str = "352+*9-";
console.log(solution(str));

/*
    넣고...... 3 5 2
    2개 꺼내서 + 하고
    *를 만나면 다시 두개 꺼내서 * 
    9 넣고
    - 만나면 두개 꺼내서 -

    stack에 마지막 남은 값이 answer
*/
