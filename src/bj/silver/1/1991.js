"use strict";

/**
 * 이진 트리 - 전위, 중위, 후위 순회 문제
 *
 * tree라는 {}을 만들고 tree[node] = [left, right] 형태로 값을 넣을 아이디어를 생각해내지 못했다.
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  let result = "";
  const tree = {};

  for (let i = 0; i < inputs.length; i++) {
    const [node, left, right] = inputs[i].split(" ");
    tree[node] = [left, right]; // tree의 key값으로 node를 저장하고, value로 left와 right가 담긴 배열을 저장한다.
  }

  // 전위 순회는 root부터 기록을 시작하므로, 재귀의 맨 앞에서 result에 기록부터 한다.
  const preorder = (node) => {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    result += node;
    preorder(lt); // 왼쪽
    preorder(rt); // 오른쪽
  };

  // 중위 순회는 왼쪽-루트-오른쪽 순이므로, 왼쪽의 재귀가 끝난 후에 result에 기록한다.
  const inorder = (node) => {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    inorder(lt);
    result += node;
    inorder(rt);
  };

  const postorder = (node) => {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    postorder(lt);
    postorder(rt);
    result += node;
  };

  preorder("A");
  result += "\n";
  inorder("A");
  result += "\n";
  postorder("A");

  return result;
};

console.log(solution(+n, inputs));
