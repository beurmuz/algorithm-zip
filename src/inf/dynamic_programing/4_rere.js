"use strict";

function solution(m, coin) {
  let dy = Array.from({ length: m + 1 }, () => 1000); // index는 거슬러주는 금액.
  // dy[i]: i금액을 거슬러주는 데 사용된 최소 동전의 개수
  dy[0] = 0; // 0원을 거슬러주는 데 0개가 필요함

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1); // 더 적은 동전의 수를 dy[j]에 갱신시켜줌
      // // coin[i](코인의 값)을 빼고 1을 더하는 이유는 해당 동전을 하나 사용할 것이기 때문
    }
    // console.log(...dy);
  }
  return dy[m];
}

let coinList = [1, 2, 5];
console.log(solution(15, coinList));
