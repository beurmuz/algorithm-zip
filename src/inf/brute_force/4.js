'use strict';

function solution(m, product){ // m은 예산, arr은 상품 정보
    let answer=0;
    let n=product.length; // 학생수
    product.sort((a,b) => (a[0]+a[1]) - (b[0]+b[1])); // 총 비용으로 정렬 
    // console.log(...product);
    for(let i = 0; i < n; i++) {
        let changeMoney = m-(product[i][0]/2 + product[i][1]); // 상품가격, 배송비
        let cnt = 1;
        for(let j = 0; j < n; j++) {
            if(j!==i && (product[j][0]+product[j][1])>changeMoney) {
                break;
            }
            if(j!==i && (product[j][0]+product[j][1])<=changeMoney) { // i는 이미 샀으니, 해당 인덱스의 값은 제외함
                // 남은 예산보다 작거나 같아야 함
                changeMoney-=(product[j][0]+product[j][1]);
                cnt++;
            }
        }
        console.log(i+"번째를 할인시 구매 가능한 선물의 갯수: "+cnt);
        answer = Math.max(answer, cnt); // cnt중에서 가장 큰 값을 answer로 바꿔줌
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr)); 