// 내 풀이
/*
    key에 맞게 value들을 push하고 싶었는데, 여기서 오래걸림
*/
function solution(clothes) {
    let answer = 0;
    const hash = {};
    // 1. key(종류)에 맞게 value(이름) push하기
    clothes.forEach(v => {
        if(hash[v[1]] === undefined) hash[v[1]] = [];
        hash[v[1]].push(v[0]);
    });
    
    // 2. 종류별 개수 세기
    const count = [];
    for(let index in hash) { // 종류가 index로 인식됨 (유사배열 객체?)
        count.push(hash[index].length + 1);
    };
    
    answer = count.reduce((previous, current) => previous * current, 1) - 1;
    return answer;
}


// 다른 사람 풀이
/*
    (해당 부위의 옷 개수 n(착용하는 경우의 수) + 1(착용하지 않는 경우)) * 옷 타입 개수 만큼 누적 계산(경우의 수 곱의 법칙)... -1(모두 착용하지 않는 경우)

    이게 무슨말이지? 이해안된다 여사건인가?
*/
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1; // 
}


// 22.07.11 다시 풀어보기
function solution(clothes) {
    let answer = 0;
    const hash = {};
    
    // key에 따라 value 넣기
    clothes.forEach((v) => {
        if(!hash[v[1]]) hash[v[1]] = [];
        hash[v[1]].push(v[0]);
    });
    
    const count = [];
    for(let index in hash) {
        count.push(hash[index].length + 1);
    }
    
    answer = count.reduce((pre, cur) => pre*cur, 1) -1;
    return answer;
}