"use strict";

// 1. 처음에 푼 풀이 (정확성 3.3 / 100에 시간초과도 엄청나다)
/*
    - 진짜 큐처럼 하나 shift하고 push하고 하는 것 보단 슬라이딩 윈도우를 이용해서 풀 수 있을 것 같았다
    - 근데 q1의 맨 앞 shift -> q2 맨뒤에 push, q2 맨 앞 shift -> q1 맨 뒤에 push 이런 순서가 아니라 틀린듯
*/
function solution(queue1, queue2) {
  let half =
    (queue1.reduce((acc, val) => acc + val, 0) +
      queue2.reduce((acc, val) => acc + val, 0)) /
    2;
  let count = Math.min(
    findSmallCount(queue1, queue2, half),
    findSmallCount(queue2, queue1, half)
  );

  return count;
}

function findSmallCount(arr1, arr2, half) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let sum = 0;
    sum += arr1[i];
    for (let j = 0; j < arr2.length - 1; j++) {
      sum += arr2[(i + 1) % arr2.length];
    }
    count++;
    if (sum === half) return count;
  }
  return -1; // 합이 같은 경우가 없을 때
}

// 2. 다른 풀이
/*
    - 투포인터를 이용하면 된다고 한다
    - 내 풀이보다 훠어얼씬 빠르다
*/
function solution(queue1, queue2) {
  let totalArr = [...queue1, ...queue2];
  let maxCount = totalArr.length * 2;
  let start = 0;
  let end = queue1.length;

  const sum = (arr) => arr.reduce((a, b) => a + b);
  let totalNum = sum(totalArr.slice(start, end));
  let goalNum = sum(totalArr) / 2;
  let count = 0;

  while (count <= maxCount) {
    if (totalNum < goalNum) {
      totalNum += totalArr[end];
      end++;
    } else if (totalNum > goalNum) {
      totalNum -= totalArr[start];
      start++;
    } else if (totalNum === goalNum) {
      return count;
    }
    count++;
  }

  return -1;
}
