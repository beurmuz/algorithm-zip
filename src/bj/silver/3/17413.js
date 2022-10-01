"use strict";

/*
    `<a-z\s+>`: <>안에 알파벳 소문자 or 공백이 1개 이상 존재할 때
    `[a-z0-9]+`: 괄호 없이 알파벳 소문자 or 숫자가 1개 이상 존재할 때
*/
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = input;
const regExp = /<[a-z\s]+>|[a-z0-9]+/g;

answer = answer.replace(regExp, (word) => {
  return word.startsWith("<") ? word : word.split("").reverse().join("");
});

console.log(answer);
