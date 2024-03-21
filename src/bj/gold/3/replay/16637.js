const [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, inputs) => {
  let answer = -Infinity;
  let arr = inputs[0].split("");

  let nums = [];
  let ops = [];

  // 수식 분리
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) nums.push(+arr[i]);
    else ops.push(arr[i]);
  }

  // 연산자에 맞게 연산하는 함수
  const operations = (op, n1, n2) => {
    if (op === "+") return n1 + n2;
    if (op === "-") return n1 - n2;
    if (op === "*") return n1 * n2;
  };

  const recursive = (idx, sum) => {
    // console.log(idx, sum);
    if (idx === nums.length - 1) {
      answer = Math.max(answer, sum);
      //   console.log(`answer 갱신: ${answer}`);
      return;
    }

    // 순차적으로 계산한 값은 아래의 연산에서 나온다.
    recursive(idx + 1, operations(ops[idx], sum, nums[idx + 1]));
    // console.log(`----- idx: ${idx}`);

    // 괄호 묶어주기 시작
    if (idx + 2 <= nums.length - 1) {
      // 숫자가 2개 이상 남아있을 때 괄호로 묶을 수 있다.
      // 현재 sum값과 뒤에 괄호로 묶은 값(ops[idx+1], ops[idx+2])을 연산해야 한다.
      let tmpSum = operations(ops[idx + 1], nums[idx + 1], nums[idx + 2]);
      // idx에 숫자 2개(괄호에서 계산한 것들)만큼 더해서 다음 연산 진행하기
      recursive(idx + 2, operations(ops[idx], sum, tmpSum));
    }
  };
  recursive(0, nums[0]);
  return answer;
};

console.log(solution(+N, inputs));
