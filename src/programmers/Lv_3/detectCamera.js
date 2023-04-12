"use strict";

/**
 * 결혼식? 문제랑 비슷하다고 생각했다만 조건 넣는게 조금 더 까다로웠다.
 */
// 처음에 푼 풀이법
const solution = (routes) => {
  let answer = 0;
  // 진입점을 기준으로 정렬한다.
  routes.sort((a, b) => a[0] - b[0]);

  let out = routes[0][1]; // 첫 차량의 진출을 out에 저장
  for (let i = 1; i < routes.length; i++) {
    if (out < routes[i][0]) {
      // 이전 차량의 진출이 현재 차량의 진입보다 작다면
      answer++; // 카메라 설치
      out = routes[i][1]; // 현재 차량의 진출로 out 업데이트
    }
    if (out > routes[i][1]) {
      // 만약 이전 차량의 진출이 현재 차량의 진출보다 크면
      out = routes[i][1]; // out을 현재 차량의 진출로 바꾼다.
    }
  }
  return answer + 1; // 마지막 차량의 카메라 설치 여부를 체크해서 낸다.
};

// 다른 풀이법
// 단, 위에 풀이보다 더 시간이 오래걸린다
const checkCam = (come, out, cameras) => {
  for (let camera of cameras) {
    if (come <= camera && camera <= out) {
      return true;
    }
  }
  return false;
};

const solution = (routes) => {
  const answer = [];
  routes.sort((a, b) => a[1] - b[1]); // 진출 시간으로 정렬한다.

  for (let [come, out] of routes) {
    if (!checkCam(come, out, answer)) answer.push(out);
  }
  return answer.length;
};
