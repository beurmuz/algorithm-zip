'use strict';

// 나는 못풀었다
function solution(number, k) {
    let answer = [0]
    let deleteCount = -1
    for(let i=0; i<number.length; i++){
        while(deleteCount < k && number[i] > answer[answer.length-1]) {
            answer.pop()
            deleteCount++
        }
        if(answer.length < number.length - k) answer.push(number[i])
    }
    return answer.join('');
}


// 다른 풀이
const solution = (number, k) => {
    const stack = [];
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        const item = number[i]
        // stack이 초기에 비어있으면 push 한다.
        if (stack.length === 0) {
            stack.push(item);
            continue;
        }
        // stack에 쌓인 최근 값이 들어와야할 값보다 크거나 같을때까지 꺼낸다.
        while (stack[stack.length - 1] < item) {
            stack.pop(); // 가장 뒤에 있는 값 빼기
            count++;
            // 만약 숫자를 빼야할만큼 뺐다면 완성된 값을 반환한다.
            if (count === k) return stack.join("") + number.slice(i)
            // 스택이 비어있으면 루프를 멈추고 스택에 아이템을 추가한다.
            if (stack.length === 0) break;
        }
        stack.push(item)
    }
    // 만약
    return stack.join("").slice(0, number.length - k + count)
}


// 또 다른 풀이
function solution(number, k) {
    let numLength = number.length;
    let stack = [];
    let count = 0;

    for (let i = 0; i < numLength; i++) {
        let current = number[i];
        if(!stack.length){
           stack.push(current);
           continue;
        }

        //stack의 쌓인 최근 값이 들어와야할 값보다 크거나 같을 때까지 꺼낸다..
        while (stack[stack.length - 1] < current) {
            stack.pop();
            count++; // 뺀자리 카운트
            // 인자값 대로 다 뺐다면 남은 숫자 다 꺼냄
            if (count === k) {
                return stack.join('') + number.substring(i, numLength);
            }

            if (stack.length === 0 ) {
                break;
            }

        }
        stack.push(current);
    }

    return stack.join('').substring(0, numLength - k);
}