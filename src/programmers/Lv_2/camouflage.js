// 내 풀이
/*
    key에 맞게 value들을 push하고 싶었는데, 여기서 오래걸림

    answer를 구하기 위해 reduce하는 부분 제대로 이해하지 못했다!
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