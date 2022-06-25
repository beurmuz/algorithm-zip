// 내 풀이
/*
    sort하고 값이 같지 않으면 바로 return
*/
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i = 0; i <= completion.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
    return participant[participant.lenght - 1];
}


// 해시로 푼 풀이
/*
    - map.set(key, value)형태로 객체를 추가하게 되는데 p, 즉 participant의 첫번째 요소부터 추가하는 것
    - map에 처음 추가를 하게 되면 key값으로 p가 전달이 되고 value값으로 map.get(p) || 0 + 1 이 전달됨
        - p가 처음 추가되는 상황이면 map.get(p)가 false이므로 0이 출력값이 되고 1을 더하니 결과적으로 key에 p, value에 1이 map에 저장됨
        - 만약 map에 p가 이미 추가되어있다면(동명이인) map에 key가 p, value가 1인 객체가 있는 것
        - 그렇게 되면 map.get(p)가 true가 되어 map.get(p) || 0)가 map.get(p)가 나오게 되고(즉 1이 나오게 됨) +1을 하면 p의 value값으로 2가 전달됨
        - 같은 원리로 c(완주자)가 이미 map에 있다면 p 1 인 상태에서 -1이 되어 value값이 0이 됨
        - 반대로 없는 경우에는(즉 완주를 못함) p에서는 있었으므로 value값이 1이지만 c에는 없으므로 value값이 1인상태로 남게 됨
        - 동명이인의 경우에는 p에서 또 1이 더해져 value가 2인상태에서 c에서 1을 뺀다고 해도 값이 1이 남게됨
    - for 문에서 value값이 0이상인 값들(미완주자, 동명이인)이 출력
*/

function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let p = participant[i], 
            c = completion[i];

        map.set(p, (map.get(p) || 0) + 1);
        map.set(c, (map.get(c) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}


// 또 다른 풀이법
/*
    https://programmers.co.kr/learn/courses/30/lessons/42576/solution_groups?language=javascript
*/
var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))