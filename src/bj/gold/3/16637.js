/**
 * [그리디, 시뮬레이션]
 * - 1 <= 수식의 총 길이(N) <= 19 이고, 최댓값을 찾는다는 것에서 그리디를 떠올릴 수 있다.
 * - 포인트는 괄호의 갯수는 없어도 되고, 엄청 많아도 된다는 것
 * - 괄호를 묶는게 포인트이다. 그리고 dfs로 구현한 재귀함수.. 사실 재귀함수임
 */

const [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, inputs) => {
  let answer = -Infinity; // 최댓값을 찾아야하므로 초기값은 -무한값으로 설정한다.
  let arr = inputs[0].split("");

  let nums = []; // 숫자만 담을 배열
  let operator = []; // 연산자를 담을 배열

  // 수식을 분리한다.
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      // 숫자는 항상 짝수번째 인덱스에 위치한다. => 즉, 연산자가 맨 앞이나 뒤에 나올 수 없다는 것
      nums.push(+arr[i]); // 숫자로 형변환을 해서 push한다.
    } else operator.push(arr[i]);
  }

  // 연산자에 맞게 값을 계산하는 함수
  const calcWithOperator = (op, n1, n2) => {
    if (op === "+") return n1 + n2;
    if (op === "-") return n1 - n2;
    if (op === "*") return n1 * n2;
  };

  const dfs = (idx, sum) => {
    // console.log(`현재 idx: ${idx}, 지금까지의 총합: ${sum}`);
    if (idx === nums.length - 1) {
      // 종료 조건
      //   console.log(`--- 모든 수식을 다 돌았다! a: ${answer}, s: ${sum} ---`);
      answer = Math.max(answer, sum);
      return;
    }

    dfs(idx + 1, calcWithOperator(operator[idx], sum, nums[idx + 1]));

    // console.log(`🚨🚨🚨 한바퀴 탐색 끝!!`);
    if (idx + 2 <= nums.length - 1) {
      // nums.length보다 작으면 더 연산할 수 있는 것
      // 여기서 괄호를 묶는다. (nums[idx+1] + op[idx+1] + nums[idx+2])
      let tmp = calcWithOperator(
        operator[idx + 1],
        nums[idx + 1],
        nums[idx + 2]
      );
      // 괄호 묶은거랑 연산
      dfs(idx + 2, calcWithOperator(operator[idx], sum, tmp));
    }
    // console.log(`--- idx: ${idx} 탐색 끝!! ---`);
  };
  dfs(0, nums[0]);
  return answer;
};

console.log(solution(+N, inputs));
// console.log(solution(5, ["8*3+5"]));
