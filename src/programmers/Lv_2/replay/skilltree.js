/**
 * [완전탐색 (브루트포스)]
 */
function solution(skill, skill_trees) {
  let answer = 0;

  for (let tree of skill_trees) {
    // tree의 알파벳을 하나씩 검사한다.
    // 1. skill에 포함되어 있는 x만 추리기
    // 2. filtering된 값들을 다시 순회하며 x가 skill의 어느 인덱스에 있는지 찾는다.
    let check = tree.split("").filter((x) => skill.includes(x));
    check = check.map((x) => skill.indexOf(x));
    if (checking(check)) answer += 1;
  }
  return answer;
}

function checking(checkArr) {
  for (let i = 0; i < checkArr.length; i++) {
    if (checkArr[i] !== i) return false; // 선행 과목이 없으면 무조건 오답! & 순서가 다르면 무조건 오답!
  }
  return true;
}
