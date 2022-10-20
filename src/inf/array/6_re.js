"use strict";

function solution(arr) {
  let rowSum = 0,
    rowMax = 0;
  let columnSum = 0,
    columnMax = 0;
  let diaLeftSum = 0,
    diaRightSum = 0;

  // row, column, 양쪽 대각선 최댓값 구하기
  for (let i = 0; i < arr.length; i++) {
    diaRightSum += arr[i][i];
    diaLeftSum += arr[i][arr.length - i - 1];

    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];
    }
    if (rowSum > rowMax) rowMax = rowSum;
    if (columnSum > columnMax) columnMax = columnSum;
    rowSum = 0;
    columnSum = 0;
  }
  return Math.max(rowMax, columnMax, diaRightSum, diaLeftSum);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
