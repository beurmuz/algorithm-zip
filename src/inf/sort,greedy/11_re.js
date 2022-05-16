'use strict';

function count(arr, capacity) {
    let count = 1;
    let sum = 0;
    for(let x of arr) {
        if(sum + x > capacity) {
            count++;
            sum = x; // capacity를 넘는 순간 해당 x부터 누적합 구하기
        } else {
            sum += x;
        }
    }
    return count;
}

function solution(arr, m) {
    let answer = 0;

    let lt = Math.max(...arr);
    let rt = arr.reduce((a,b) => a+b);

    while(lt <= rt) {
        let mid = parseInt((lt+rt)/2);
        if(count(arr, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(arr, 3));

/*
    이분검색을 활용해서 mid값으로 DVD의 용량을 정하면 됨
    - lt는 1개의 DVD의 최소 용량으로 arr의 max값인 9
    - rt는 DVD의 최대 용량으로 arr의 누적합인 45
    - mid는 매번 갱신됨

    arr, capacity를 매개변수로 하는 count함수를 만들어서 capacity보다 큰 경우가 몇번인지 구하기
*/