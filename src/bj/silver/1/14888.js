"use strict";

// 못풀어서 풀이 보고 다시 풀어보기
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = input[0] * 1;
const numbers = input[1].split(" ").map((v) => +v);
const operators = input[2].split(" ").map((v) => +v);

function solution(N, numbers, operators) {
  const operator = changeOperators(operators);
  const visited = new Array(operator.length).fill(false);
  let answer = [];
  let results = [];
  dfs(0);

  console.log(Math.max(...results));
  console.log(Math.min(...results));

  function dfs(count) {
    if (count === N - 1) {
      results.push(calculate(numbers, answer));
    }

    for (let i = 0; i < N - 1; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      answer.push(operator[i]);
      dfs(count + 1);
      visited[i] = false;
      answer.pop();
    }
  }

  function changeOperators(operators) {
    const operator = [];
    for (let i = 0; i < operators.length; i++) {
      let opr = "";
      if (i === 0) opr = "+";
      else if (i === 1) opr = "-";
      else if (i === 2) opr = "x";
      else if (i === 3) opr = "%";

      for (let j = 0; j < operators[i]; j++) {
        operator.push(opr);
      }
    }
    return operator;
  }

  function calculate(numbers, operators) {
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      result = calculateWithOperator(result, numbers[i + 1], operators[i]);
    }
    return result;
  }

  function calculateWithOperator(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "x":
        return a * b;
      case "%":
        a = Math.abs(a);
        if (a < 0) return -Math.floor(a / b);
        return Math.floor(a / b);
    }
  }
}

// 제출
solution(N, numbers, operators);
