'use strict';

function solution(needSubject, designSubject) {
    let answer = 'YES';
    needSubject = needSubject.split('');
    for(let i of designSubject) {
        if(needSubject.includes(i)) {
            if(i !== needSubject.shift()) {
                return "NO";
            }
        }
    }
    if(needSubject.length > 0) {
        return "NO";
    }

    return answer;
}


let needSubject = 'CBA';
let designSubject = 'CBDAGE';

console.log(solution(needSubject, designSubject));

/*

*/