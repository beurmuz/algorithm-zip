/**
 * [이분 탐색]
 */

function solution(n, times) {
  // 이분 탐색을 하려면 우선 정렬을 해야한다.
  times.sort((a, b) => a - b);

  // 최솟값, 최댓값을 설정 (최댓값은 가장 긴 심사시간 * 대기자 수)
  let [lt, rt] = [1, n * times[times.length - 1]];
  let answer = rt; // answer는 rt값으로 갱신해놓는다. (= 최대 시간)

  // 최소 시간 찾기 시작!
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let count = 0;

    // times를 순회하면서 한 사람당 몇명을 심사할 수 있는지 찾는다.
    times.forEach((time) => {
      count += Math.floor(mid / time);
      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값 갱신
        return;
      }
    });

    if (count >= n) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}
