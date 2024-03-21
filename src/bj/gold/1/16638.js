/**
 * [그리디, 시뮬레이션, DFS]
 * - 16637에서 연산자 우선순위만 추가된 것이라 금방 풀 수 있을 줄 알았는데, 아니었다. 어려워!!!!!
 */

const [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, inputs) => {
  // 들어온 식을 분리한다. (짝수번째는 숫자, 홀수번째는 연산자이다.)
  let arr = inputs[0].split("").map((v, i) => (i % 2 === 0 ? +v : v));

  // 연산자에 따라 두 값을 계산하는 함수
  const ops = (n1, op, n2) => {
    if (op === "+") return n1 + n2;
    if (op === "-") return n1 - n2;
    if (op === "*") return n1 * n2;
  };

  // 괄호 내부를 계산하는 함수
  const calc = (expression, idx) => {
    console.log(`--- 괄호 계산! 현재 idx: ${idx}`);
    console.log(expression);
    const copy = [...expression];
    // copy 배열에서 idx-1부터 값(3개)를 삭제한 후, 그 자리에 삭제한 3개의 숫자의 연산 결과를 넣는다.
    copy.splice(idx - 1, 3, ops(copy[idx - 1], copy[idx], copy[idx + 1]));
    console.log(copy);
    return copy;
  };

  // 괄호를 묶는 함수
  const brackets = [];
  const getBrackets = (selected, rests) => {
    brackets.push(selected);
    if (!rests.length) return; // 남은게 없다면 즉시 종료한다.
    rests.forEach(
      (rest, idx) => getBrackets(selected.concat([rest]), rests.slice(idx + 2)) // rests의 idx+2번째 부터 남은 것(즉, idx+2 ~ rests.length - 1)을 getBrackets에 넘긴다.
    );
  };
  getBrackets(
    [],
    [...Array(parseInt(N / 2))].map((v, i) => i * 2 + 1) // 숫자만 걸러내기
  );

  const results = brackets.map((brs) => {
    let exp = [...arr];
    brs.forEach((bracket, idx) => (exp = calc(exp, bracket - idx * 2)));
    while (true) {
      const idx = exp.indexOf("*");
      if (~idx) exp = calc(exp, idx);
      else break;
    }
    while (exp.length > 1) exp = calc(exp, 1);
    return exp[0];
  });
  return results.reduce((a, b) => (a > b ? a : b));
};

console.log(solution(+N, inputs));

// console.log(solution(5, ["8*3+5"]));
