'use strict';

function count(songs, capacity) { // capacity는 mid값을 의미함
    let count = 1; // 장수. 노래를 저장하는 데 최소한 1장은 있어야하므로 1
    let sum = 0; // DVD에 노래가 누적되는 용량
    for(let x of songs) {
        if(sum + x > capacity) {
            count++;
            sum = x;
        } else {
            sum += x;
        }
    }
    return count;
}

function solution(m, songs){
    let answer;
    let lt = Math.max(...songs);
    let rt = songs.reduce((a,b) => a+b, 0); // 시작은 0부터, 요소를 하나씩 더하기

    while(lt <= rt) {
        let mid = parseInt((lt+rt)/2);
        if(count(songs, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

/*
    이분검색 이용하기 (mid가 DVD한 장의 용량이라고 생각하고, lt >= rt인 경우까지 찾기)
    - 우선 범위를 찾아야 함
        - lt: 최소한 DVD 1개의 용량은 9 (가장 긴 노래가 9분이라서)
        - rt: 노래 전체를 통으로 저장할 수 있는 용량이어야 하므로 총합인 45
        => mid 구하기: (9+45)/2 = 27
        - DVD한장 용량이 27이라면 총 2장에 곡을 담을 수 있음 
        - answer에 27 담아놓고 28~45까지는 볼 필요 없으니 rt를 mid-1인 26으로 갱신해줌 
    - 다시 mid 구하고 rt나 lt 갱신하기
        - mid = (lt+rt)/2 = 17
*/
