/**
 * [stack, queue]
 * - 스택, 큐 문제라고는 되어있지만, 막상 스택을 이용하면 효율성 테스트 중 하나가 시간 초과로 뜬다.
 */
function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      stack && stack.pop();
    }
  }
  return stack.length ? false : true;
}

/**
 * 다시 푼 풀이법
 * - 다시 푼 방법은 count를 이용한 방법.
 * - 놀랍게도 얘는 효율성 문제 2개 전부 시간초과로 뜬다.
 */
function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count < 0) return false;
    if (s[i] === "(") count++;
    else count--;
  }
  return count === 0 ? true : false;
}

/**
 * 정답은 아래의 코드만 가능하다.
 * - 삼항 연산자를 써서 시간초과가 발생하나? 아니면 맨 처음에 if문으로 ')'로 시작하는 경우를 따로 잡아내서 그런건지.. 재밌는 문제이다.
 */
function solution(s) {
  let answer = false;
  let count = 0;
  for (let x of s) {
    if (count < 0) return false;
    if (x === "(") count++;
    else if (x === ")") count--;
  }
  if (count === 0) return true;
  return answer;
}
