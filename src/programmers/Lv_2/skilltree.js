'use strict';

// 처음에 푼 풀이
/*
    정확성 28.6/100.0 
    -> 이게 무슨일..?
*/
function solution(skill, skill_trees) {
    let answer = 0;
    let skillArr = skill.split('');
    
    skill_trees.forEach((skillel) => {
        skillel = skillel.split('');
        
        let includesSkill = [];
        
        // skill 중 어떤게 들어있는지 탐색
        for(let i = 0; i < skillel.length; i++) {
            if(skillArr.includes(skillel[i])) {
                includesSkill.push(skill.indexOf(skillel[i]));
            }
            continue;
        }
        let unorder = [...includesSkill];
        let order = includesSkill.sort((a,b) => a-b);
        if(order.includes(0) && unorder.join('') === order.join('')) answer++;
    });
    return answer;
}


// 다시 풀어서 맞춘 풀이
/*
    다른 풀이를 약간 참고했는데, 무조건 맨 앞 과목을 배우지 않으면 그 뒷 과목들을 배울 수가 없으므로
    for문으로 0부터 includesSkill.length까지 +1씩 키워나가며 체크하면 된다.
*/
function solution(skill, skill_trees) {
    let answer = 0;
    let skillArr = skill.split('');
    
    skill_trees.forEach((skillel) => {
        skillel = skillel.split('');
        
        let includesSkill = [];
        
        // skill 중 어떤게 들어있는지 탐색
        for(let i = 0; i < skillel.length; i++) {
            if(skillArr.includes(skillel[i])) {
                includesSkill.push(skill.indexOf(skillel[i]));
            }
            continue;
        }
        if(checkOrder(includesSkill)) answer++;
    });
    return answer;
}

function checkOrder(checkArr) {
    for (let i = 0; i < checkArr.length; i++) {
        if (checkArr[i] !== i) return false;
    }
    return true
}


// 다른 사람 풀이
/*
    해당 풀이는 filter에서 map을 또 사용했기에 나보다 느릴 줄 알았는데, 나보다 더 빠르게 나온다.. 😱
*/
function solution(skill, skill_trees) {
    let answer = 0;
    for (const tree of skill_trees) {
        let check = Array.from(tree).filter(x => skill.includes(x)).map(x => skill.indexOf(x));
        if (checkOrder(check)) answer += 1
    }
    return answer;
}

function checkOrder(checkArr) {
    for (let i = 0; i < checkArr.length; i++) {
        if (checkArr[i] !== i) return false;
    }
    return true
}