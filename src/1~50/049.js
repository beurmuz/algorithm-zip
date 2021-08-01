var nums = prompt('숫자 10개를 입력하세요.').split(' ');
var intNums = [];

for(var i = 0; i < nums.length; i++) {
    intNums.push(parseInt(nums[i]));
}
console.log(Math.max(...intNums));