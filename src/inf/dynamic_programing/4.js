'use strict';

function solution(m, coin) {
    let answer = 0;
    let dy = Array.from({ length: m+1 }, () => 1000);
    dy[0] = 0;

    for(let i = 0; i < coin.length; i++) { // 동전의 종류만큼 반복
        for(let j = coin[i]; j <= m; j++) {
            dy[j] = Math.min(dy[j], dy[j-coin[i]]+1); // 기존 금액, coin[i]
        }
        console.log(dy); // 1원만 / 1,2원 / 1,2,5원
    }
    answer = dy[m];
    return answer;
}

let coinList = [1, 2, 5];
console.log(solution(15, coinList));

/*
    작은 단위에서부터 점차 확대시켜 푸는 방법
    - dy: 거슬러줄 금액의 인덱스 번호가 나오도록 배열 만들어주기
        - 0이 아닌 큰 수로 초기화해주기
        - 인덱스 번호 = 거슬러줄 금액
        - dy[i]는 i금액을 거슬러주는 데 사용된 최소동전의 개수
    - dy[0] = 0 으로 초기화해야 함 
*/