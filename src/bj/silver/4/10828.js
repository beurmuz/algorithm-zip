'use strict';
/*
    함수를 직접 구현해보려 했는데, 찾아보니 'top'을 이용하면 된다고 하여 풀이를 한번 읽어본 후, 직접 구현해보았다 !
*/

const [n, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const stack = [];
let top = 0;
let answer = '';

for(let i = 0; i < +n; i++) {
    const command = inputs[i].split(' ')[0];
    let result = '';
    
    switch(command) {
        case 'push':
            const pushItem = inputs[i].split(' ')[1];
            stack[top++] = pushItem;
            break;
        case 'pop':
            if(top) {
                top = top-1;
                result = stack.splice(-1); // 맨 뒤에꺼 하나 빼기
                answer += `${result} `;
            } else {
                result = result-1;
                answer += `${result} `;
            }
            break;
        case 'top': 
            result = top ? stack[top-1] : -1;
            answer += `${result} `;
            break;
        case 'empty':
            result = top ? 0 : 1;
            answer += `${result} `;
            break;
        case 'size': 
            result = top;
            answer += `${result} `;
            break;
        default:
            break;
    }
}

console.log(answer.split(' ').join('\n'));