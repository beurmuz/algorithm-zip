// 다시 풀어봤다
function solution(numbers, hand) {
    let answer = '';
    let lt = 10, rt = 12;
    numbers.forEach((value) => {
        if(value === 0) value = 11;
        if(value%3 === 1) {
            lt = value; // 현재 위치 저장
            answer += 'L';
        } else if (value%3 === 0) {
            rt = value; // 현재 위치 저장
            answer += 'R';
        } else {
            let ltDistance = getdistance(lt, value);
            let rtDistance = getdistance(rt, value);
            
            if(ltDistance === rtDistance) {
                if(hand === 'left') {
                    lt = value;
                    answer += 'L';
                } else {
                    rt = value;
                    answer += 'R';
                }
            }
            if(ltDistance > rtDistance) {
                rt = value;
                answer += 'R';
            } else if(ltDistance < rtDistance) {
                lt = value;
                answer += 'L';
            }
        }
    });
    return answer;
}

function getdistance(handLocation, targetLocation) {
    const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        10: [3, 0], 11: [3, 1], 12: [3, 2]
    }
    let now = keyPad[handLocation];
    let target = keyPad[targetLocation];
    
    return Math.abs(now[0] - target[0]) + Math.abs(now[1] - target[1]);
    
}