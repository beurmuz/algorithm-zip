function solution(numbers, target) {
  let answer = 0;

  function dfs(sum, L) {
    if (L === numbers.length) {
      if (sum === target) answer++;
      return;
    } else {
      dfs(sum + numbers[L], L + 1);
      dfs(sum - numbers[L], L + 1);
    }
  }
  dfs(0, 0);
  return answer;
}
