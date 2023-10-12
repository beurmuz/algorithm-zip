function solution(n, lost, reserve) {
  let answer = 0;
  const students = Array.from({ length: n + 2 }, () => 1); // 하나씩 다 입을 수 있다.

  // 현 체육복 현황 체크하기 (잃어버린 것과 여분 체크)
  for (let i of lost) {
    students[i] -= 1;
  }
  for (let i of reserve) {
    students[i] += 1;
  }

  // 적절히 분배하기
  for (let i = 1; i <= n; i++) {
    if (students[i] === 0) {
      if (students[i - 1] === 2 || students[i + 1] === 2) {
        if (students[i - 1] === 2) {
          students[i - 1] -= 1;
          students[i] += 1;
        } else if (students[i + 1] === 2) {
          students[i + 1] -= 1;
          students[i] += 1;
        }
      }
    }
  }
  return students.filter((num) => num >= 1).length - 2;
}
