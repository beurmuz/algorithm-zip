'use strict';
// 제출 코드 - 왼쪽, 오른쪽 이동방법 이해못함
function solution(name) {
    let answer = 0;
    let upDownCount = 0;       
    for(let i = 0; i < name.length; i++) {
        upDownCount += minUpOrDownCount(name[i]);    
    }
    
    let leftRightCountList = [name.length-1]; // 한 방향으로 쭉 셌을 때
    for(let startOfA = 0; startOfA < name.length; startOfA++) {
        let endOfA = startOfA + 1;
        while (endOfA < name.length && name[endOfA] === 'A') {
            endOfA++;
        }
        const [moveToStartOfA, moveToEndOfA] = [startOfA, name.length - endOfA]
         leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA)// 0 -> A.., 0 <- A.., ..A <- -1
        leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA)//시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
    }
    answer = upDownCount + Math.min(...leftRightCountList)
    return answer;
}

function minUpOrDownCount(target) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index = alpha.indexOf(target);
    return Math.min(index, alpha.length - index); // up인 경우, down인 경우
}
