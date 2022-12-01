"use strict";

function solution(m, coin) {
  let dy = Array.from({ length: m + 1 }, () => 500);
  dy[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  return dy[m];
}

let coinList = [1, 2, 5];
console.log(solution(15, coinList));
