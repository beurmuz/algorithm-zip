const nums = prompt('두 수를 입력하세요.').split(' ');
let result = 1;

for(var i = 0; i < 2; i++) {
   nums[i] = parseInt(nums[i]);
}
for(var j = 1; j <= nums[1]; j++) {
    result *= nums[0];
    console.log(result);
}

console.log(`a^b는 ${result}입니다.`);

// 모범 답안
// const n = prompt('수를 입력하세요.').split(' ');
// console.log(Math.pow(parseInt(n[0]), parseInt(n[1])));