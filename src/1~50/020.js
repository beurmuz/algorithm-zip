const nums = prompt('두 수를 입력하세요.').split(' ');
const share = Math.floor(parseInt(nums[0])/parseInt(nums[1]));
const rest = parseInt(nums[0])%parseInt(nums[1]);
console.log(`${share} ${rest}`);