/**
 * [dp, 동적프로그래밍 문제]
 * - 해설은 https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B0%80%EC%9E%A5-%EA%B8%B4-%ED%8C%B0%EB%A6%B0%EB%93%9C%EB%A1%AC-JS 사이트를 참고했다.
 */

function solution(s) {
  let answer = 1; // s는 자연수로, 최솟값은 1이다.
  const len = s.length;
  const dp = Array.from({ length: s.length }, () =>
    Array(s.length).fill(false)
  );

  // 각 문자의 위치를 true로 바꿔준다. dp[i][i] = true;
  // 모든 dp[i][i]는 항상 true 이다. 이를 해석하면 시작문자i 부터 종료문자i 까지의 범위이므로 이는 곧 자기 자신을 뜻하며, 나 자신 하나의 경우는 항상 팰린드롬이 성립한다.
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }

  // 문자열을 한바퀴 돌면서 연속된 같은 문자가 있는지 찾아본다.
  // 길이가 2인 팰린드롬의 여부도 원한다면 초기화가 가능하다.
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      answer = 2;
    }
  }

  // 앞서 길이가 2인 팰린드롬의 유무를 진행했기에, 점화식은 길이가 3인 팰린드롬을 검사하는 것부터 진행하면 된다.
  // s의 3번째부터 끝까지 확인해본다.
  // DP[i][j] = true : 시작문자 i 부터 종료문자 j 까지의 문자열이 팰린드롬이라면 true, 아니면 false
  for (let i = 3; i <= s.length; i++) {
    for (let start = 0; start <= s.length - i; start++) {
      const end = start + i - 1;

      // 양 끝이 서로 일치하며,
      if (s[start] === s[end] && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        answer = Math.max(answer, i);
      }
    }
  }

  return answer;
}
