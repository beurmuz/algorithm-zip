"use strict";

function solution(expression) {
  const prior = [
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "*", "-"],
    ["+", "-", "*"],
  ];

  let candidates = [];

  prior.forEach((operators) => {
    const temp = expression.split(/(\D)/); // expression을 기호를 기준으로 split하기

    operators.forEach((op) => {
      while (temp.includes(op)) {
        const opIdx = temp.indexOf(op); // 가장 앞에 있는 op의 인덱스번호를 찾아 저장
        let calculate = eval(temp.slice(opIdx - 1, opIdx + 2).join("")); // opIdx의 앞, 뒤를 하나의 문장으로 이어서 eval로 계산하기
        temp.splice(opIdx - 1, 3, calculate); // opIdx의 앞부터 뒤까지 자른 후, 그 자리에 calculate 값 넣기
      }
    });
    candidates.push(Math.abs(temp[0]));
  });
  console.log(candidates);
  return Math.max(...candidates);
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));
console.log(solution("5*6-3+2"));
