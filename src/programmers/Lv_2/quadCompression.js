"use strict";

/*
    - 못풀어서 풀이 바로 봄
    - every()는 모든 요소가 조건에 맞는지 Boolean 형태로 값을 return해줌
    - splice()는 배열의 기존 요소를 삭제 or 교체 or 새 요소를 추가해 배열의 내용을 변경 (원본 배열은 유지되지 않음)
    - 근데 제대로 이해 못함 ㅠㅠ
*/
function solution(arr) {
  // 모든 칸이 0 또는 1로만 채워져있는지 every()로 검사
  if (arr.every((row) => row.every((cell) => cell === 0))) return [1, 0];
  if (arr.every((row) => row.every((cell) => cell === 1))) return [0, 1];

  // 영역 나누기
  const n = arr.length;
  const q1 = arr.splice(0, n / 2); // 2사분면
  const q2 = q1.map((row) => row.splice(n / 2, n / 2)); // 1사분면, n/2 지점부터 n/2개 자르기
  const q3 = arr; // 3사분면
  const q4 = q3.map((row) => row.splice(n / 2, n / 2)); // 4사분면
  return [q1, q2, q3, q4].reduce(
    (answer, x) => solution(x).map((d, i) => d + answer[i]),
    [0, 0]
  );
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);

console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
);

// 다른 풀이법 1
function solution(arr) {
  const quadZip = (row, col, n) => {
    if (n < 2) return arr[row][col] ? [0, 1] : [1, 0];
    let cnt0 = 0,
      cnt1 = 0;
    n >>= 1;
    for (let [i, j] of [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ]) {
      let [zero, one] = quadZip(row + i * n, col + j * n, n);
      cnt0 += zero;
      cnt1 += one;
    }
    if (cnt0 === 0) return [0, 1];
    if (cnt1 === 0) return [1, 0];
    return [cnt0, cnt1];
  };
  return quadZip(0, 0, arr.length);
}

// 또 다른 풀이법 2
function solution(arr) {
  // 부랄정복!
  const boolSet = { 0: 0, 1: 0 };
  const [isValid, partition, execute] = [
    (arr, n, i) =>
      i === n
        ? "⚡"
        : new Set(arr[i]).size == 1 && [...new Set(arr[i])][0] == arr[0][0]
        ? isValid(arr, n, i + 1)
        : false,
    (arr, n) =>
      [
        [0, 0],
        [0, n],
        [n, 0],
        [n, n],
      ].map((v) =>
        new Array(n)
          .fill("🔥")
          .map((_, i) => arr[v[0] + i].slice(v[1], v[1] + n))
      ),
    (arr, n) =>
      isValid(arr, n, 0)
        ? (boolSet[arr[0][0]] += 1)
        : partition(arr, ~~(n / 2)).forEach((particle) =>
            execute(particle, ~~(n / 2))
          ),
  ];
  execute(arr, arr.length);
  return Object.values(boolSet);
}
