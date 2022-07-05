// 내 풀이
/*
    처음엔 시프트 연산자를 이용해서 풀어볼까 했지만, 그러면 
    함수까지는 잘 만들었는데 while 반복문 내를 
*/
function solution(n) {
    let answer = n;
    const countOne = countOneFunc(n.toString(2));
    
    while(1){
        answer++
        if(countOne === (answer).toString(2).match(/1/g).length) break
    }
    return answer;
}

function countOneFunc(str) {
    let sum = 0;
    for(let x of str) {
        if(x === '1') sum += 1;
    }
    return sum;
}


// 다른 풀이
/*
    좀 더 간단하게 줄인 코드
*/
function nextBigNumber(n) {
    var size = n.toString(2).match(/1/g).length
    while(n++) {
        if(size === n.toString(2).match(/1/g).length) return n
    }
}