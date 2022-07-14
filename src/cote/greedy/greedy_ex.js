'use strict';

function solution(coinList, n) {
    let answer = 0;

    for(let coin of coinList) {
        // 잔돈으로 거슬러 줄 수 있는 각 동전의 개수를 구해 answer에 누적합하기 
        answer += Math.floor(n / coin);

        // 잔돈 구하기
        n = n % coin;
    }
    return answer;
}

const coinList = [500, 100, 50, 10];
console.log(solution(coinList, 1260));

// 시간 복잡도는 O(n) => 총 화폐의 종류, 즉 n만큼 반복을 수행하기 때문