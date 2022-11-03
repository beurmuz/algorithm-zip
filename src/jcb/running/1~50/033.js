const nums = prompt('숫자를 입력하세요').split(' ').reverse();
var result = '';

for(var i=0; i<nums.length; i++) {
    result += nums[i];
}
console.log(result);