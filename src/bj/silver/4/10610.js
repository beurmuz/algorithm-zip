"use strict";

// 처음에 푼 풀이 - 틀렸다....★ 근데 그럴 수밖에
let n = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

n.sort((a, b) => b - a);

if (+n.join("") % 30 === 0) {
  console.log(n.join(""));
} else {
  console.log(-1);
}

// 다른 풀이
/*
    - 30배수의 끝자리는 무조건 0으로 끝나야 한다. 0을 포함하지 않으면 -1을 출력하면 된다.
    - 각 자리 수를 모두 더한 합이 3으로 나누어 떨어지면 그 수는 3의 배수이다.
*/
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

if (!input.split("").includes("0")) {
  console.log(-1);
} else {
  let arrTemp = input.split("").map((e) => parseInt(e));
  let sumOfInput = arrTemp.reduce((acc, v) => acc + v);
  if (sumOfInput % 3 == 0) {
    arrTemp.sort((a, b) => b - a);
    console.log(arrTemp.join(""));
  } else {
    console.log(-1);
  }
}
