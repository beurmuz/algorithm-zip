"use strict";

/**
 * [분할,정복 문제]
 *
 * - 트리의 순회
 *   : (루트를 언제 방문하느냐에 따라 전위, 중위, 후위로 나뉜다.)
 *   - 전위 순회 (PreOrder): C(루트), L(왼쪽), R(오른쪽)
 *   - 중위 순회 (InOrder): L, C, R
 *   - 후위 순회 (PostOrder): L, R, C
 *
 * - 해당 문제에서 중위, 후위 순회 결과로 전위 순회 결과를 어떻게 도출할 수 있을까?
 *   - 중위 결과: (왼쪽 서브트리의 중위 순회 결과) -> (루트) -> (오른쪽 서브트리의 중위 순회 결과)
 *   - 후위 결과: (왼쪽 서브트리의 후위 순회 결과) -> (오른쪽 서브트리의 후위 순회 결과) -> (루트)
 *
 * - 전위 순회 결과를 구하는 방법은 아래와 같다.
 *   1. 후위 결과의 맨 마지막 숫자가 Root이므로 이를 출력한다.
 *   2. 왼쪽 서브트리의 중위 순회 결과, 후위 순회 결과를 이용해 이를 반복한다.
 *   3. 오른쪽 서브트리의 중위 순회 결과, 후위 순회 결과를 이용해 이를 반복한다.
 *
 * - JS 재귀 호출 방식을 이용하면 호출 스택이 넘쳐 런타임 에러(Call stack size Exceed)가 발생할 수 있다.
 *   - Node.js의 call stack 최대 사이즈는 약 1만인데, 만약 이진트리의 노드의 개수가 10만개이고, 모든 노드가 하나의 자식을 가지고 있어 직선 형태를 이루고 있는 경우에는 함수가 최대 10만번 호출될 수 있다.
 *   - 그러므로 반복문을 이용해 재귀 호출 방식처럼 동작하게끔 구현해야한다.
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const inorder = inputs[0].split(" ").map((v) => +v);
  const postorder = inputs[1].split(" ").map((v) => +v);
  const result = [];

  const callStack = [[0, n - 1, 0, n - 1]];
  while (callStack.length) {
    const [inStart, inEnd, postStart, postEnd] = callStack.pop();
    if (inStart > inEnd || postStart > postEnd) continue;

    const root = postorder[postEnd];
    result.push(root);

    let inRootIndex;
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === root) {
        inRootIndex = i;
        break;
      }
    }

    const postLeftEnd = postStart + (inRootIndex - 1 - inStart);
    callStack.push([inRootIndex + 1, inEnd, postLeftEnd + 1, postEnd - 1]);
    callStack.push([inStart, inRootIndex - 1, postStart, postLeftEnd]);
  }
  return result.join(" ");
};

console.log(solution(+n, inputs));
