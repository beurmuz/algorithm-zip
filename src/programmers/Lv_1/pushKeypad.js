// 내 풀이
/*
    양 옆줄은 제대로 출력했으나 가운데 줄은 출력하지 못함
*/
function solution(numbers, hand) {
    let answer = '';
    let lt = 10, rt = 12;
    numbers.forEach((value) => {
        if(value === 0) value = 11;
        
        // 왼쪽 키패드(1, 4, 7)를 누른 경우
        if(value % 3 === 1) {
            lt = value;
            answer += 'L';
        // 오른쪽 키패드(3, 6, 9)를 누른 경우
        } else if(value % 3 === 0) {
            rt = value;
            answer += 'R';
        // 가운데 키패드(2, 5, 8, 0)를 누른 경우
        } else {
            answer += '?';
            
        }
    });
    return answer;
}


// 내 풀이
/*
    다른 풀이보고 다시 풀었다
*/
function solution(numbers, hand) {
    let answer = '';
    let lt = 10, rt = 12;
    numbers.forEach((value) => {
        if(value === 0) value = 11;
        
        // 왼쪽 키패드(1, 4, 7)를 누른 경우
        if(value % 3 === 1) {
            lt = value;
            answer += 'L';
        // 오른쪽 키패드(3, 6, 9)를 누른 경우
        } else if(value % 3 === 0) {
            rt = value;
            answer += 'R';
        // 가운데 키패드(2, 5, 8, 0)를 누른 경우
        } else {
            const ltDistance = getDistance(lt, value);
            const rtDistance = getDistance(rt, value);

            if(ltDistance === rtDistance) {
                if(hand === 'left') {
                    lt = value;
                    answer += 'L';
                }
                if(hand === 'right') {
                    rt = value;
                    answer += 'R';
                }
            }

            if(ltDistance > rtDistance) {
                rt = value;
                answer += 'R';
            }
            if(ltDistance < rtDistance) {
                lt = value;
                answer += 'L';
            }
        }
    });
    return answer;
}

function getDistance(handLocation, target) {
    const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        10: [3, 0], 11: [3, 1], 12: [3, 2]
    }
    const nowPosition = keyPad[handLocation];
    const targetPosition = keyPad[target];
    
    return Math.abs(nowPosition[0] - targetPosition[0]) + Math.abs(nowPosition[1] - targetPosition[1]);
}


// 다른 풀이
const solution = (numbers, hand) => {
    const answer = [];
  
    let leftHandPosition = '*';
    let rightHandPosition = '#';
  
    numbers.forEach(number => {   
      if (number === 1 || number === 4 || number === 7) {
        answer.push('L');
        leftHandPosition = number;
        return;
      }
  
      if (number === 3 || number === 6 || number === 9) {
        answer.push('R');
        rightHandPosition = number;
        return;
      }
  
      const leftHandDistance = getDistance(leftHandPosition, number);
      const rightHandDistance = getDistance(rightHandPosition, number);
  
      if (leftHandDistance === rightHandDistance) {
        if (hand === "right") {
          answer.push('R');
          rightHandPosition = number;
          return;
        }
  
        if (hand === 'left') {
          answer.push('L');
          leftHandPosition = number;
          return;
        }
      }
  
      if (leftHandDistance > rightHandDistance) {
        answer.push('R');
        rightHandPosition = number;
      } 
  
      if (leftHandDistance < rightHandDistance) {
        answer.push('L');
        leftHandPosition = number;
      }
    });
  
    return answer.join("");
  };
  
  const getDistance = (locatedNumber, target) => {
    const keyPad = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
      4: [1, 0], 5: [1, 1], 6: [1, 2],
      7: [2, 0], 8: [2, 1], 9: [2, 2],
      '*': [3, 0], 0: [3, 1], '#': [3, 2],
    }
  
    const nowPosition = keyPad[locatedNumber];
    const targetPosition = keyPad[target];
  
    return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
  };