// 풀이
/*
    소수찾기는 맨날해도 풀이방법을 맨날 잊어버린다
    - 계산한 거 또 계산해서인지 계속 시간 초과가 일어나 이미 검색한 인덱스는 건너뜀
*/
function solution(n) {
    let answer = 0;
    let arr = Array.from({length: n+1}, () => true);
      
    for(let i = 2; i <= n; ++i){
        // 소수가 아닌 인덱스는 건너뛰기
        if(arr[i] === false) continue; 
        
        // 배수는 소수가 아니라 0으로 설정
        for(let k = i * 2; k <= n; k += i){
            arr[k] = false;
        }
    }
    // 소수의 개수 구하기
    for(let i = 2; i <= n; ++i){
        if(arr[i] === true){
            answer++;
        }
    }
    return answer;
}


// 다른 풀이
/*
    set을 이용한 풀이법. 
    - 나 set 잘 모르는 듯ㅎ 공부해야겠다
*/
function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}