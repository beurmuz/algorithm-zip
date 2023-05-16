"use strict";

/**
 * [크루스칼 알고리즘 문제]
 * 오 나 크루스칼 모르네;; https://muhly.tistory.com/124
 *
 * 다른 풀이 https://kyun2da.github.io/2020/07/17/linkIsland/
 */

let p = {};

function getParent(e) {
  if (p[e] === e) {
    return e;
  } else {
    return find(p[e]);
  }
}

function union(e) {
  let a = getParent(e[0]);
  let b = getParent(e[1]);

  if (a === b) {
    return -1;
  } else {
    if (a > b) {
      p[a] = b;
    } else {
      p[b] = a;
    }
  }
  return e[2];
}

function solution(n, costs) {
  var answer = 0;

  //오름차순 정렬
  costs.sort(function (a, b) {
    return a[2] - b[2];
  });

  //object 생성
  for (let i = 0; i < n; i++) {
    p[i] = i;
  }

  costs.map((e) => {
    let cost = union(e);
    if (cost !== -1) {
      answer += cost;
    }
  });
  return answer;
}
