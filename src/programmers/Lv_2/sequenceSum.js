"use strict";

/**
 * 내가 생각한 풀이
 * - dp로 풀면 될 것 같아서 점화식도 세워보았지만, 결국 구현 실패!
 */
const solution = (sequence, k) => {
  let answer = [];
  let dp = Array.from({ length: sequence.length }, () => 0);
  dp[0] = 0;
  let sum = sequence[0];

  for (let i = 1; i < sequence.length; i++) {
    if (sum === k) {
      answer.push([dp[i - 1], i]);
    }
    if (sum + sequence[i] < k) {
      dp[i] = dp[i - 1];
      sum += sequence[i];
    } else if (sum + sequence[i] > k) {
      sum += sequence[i];
      while (sum > k) {
        dp[i] = dp[i - 1] + 1;
        sum = sum - sequence[dp[i - 1]] + sequence[i];
      }
    }
  }

  return answer;
};

/**
 * 새로 제출한 풀이법
 * - dp만 안쓸 뿐 내가 위에서 생각한 방법이랑 비슷하다.
 */
const solution = (sequence, k) => {
  let ablePart = [];
  let sum = 0;
  let head = 0;
  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
    if (sum > k) {
      while (sum > k) {
        sum -= sequence[head++];
      }
    }
    if (sum === k) ablePart.push([head, i]);
  }

  let min = sequence.length;
  let result = [];
  ablePart.map((el) => {
    if (min > el[1] - el[0]) {
      min = el[1] - el[0];
      result = [el[0], el[1]];
    }
  });
  return result;
};
