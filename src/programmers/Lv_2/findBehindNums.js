"use strict";

function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  //   console.log(`numbers는 ${numbers}`);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    //   console.log(`i는 ${i}이고 stack은 ${stack}, answer는 ${answer}`)
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      // stack에 값이 있고, numbers[stack.at(-1)]의 값 (즉, stack의 맨 뒷값)보다 numbers[i]값이 크면
      answer[stack.pop()] = numbers[i]; // answer[stack.pop()] 자리 (stack의 맨 뒷 값 자리)에 numbers[i]의 값을 넣어준다.
      //   console.log(answer);
    }
    stack.push(i);
  }
  return answer;
}

console.log(solution([2, 3, 3, 5]));
