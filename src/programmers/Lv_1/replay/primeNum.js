/**
 * [완전탐색]
 * - 입력값의 최대 범위가 50n^3*n이라고 판단되어, 10^8보다는 작으므로 완전탐색으로 풀었다.
 */

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length - 0; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (sum % 2 === 0) continue;
        answer += isPrime(sum) ? 1 : 0;
      }
    }
  }
  return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
