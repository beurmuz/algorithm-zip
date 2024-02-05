/**
 * [이분 탐색]
 * - 최솟값을 찾는다 하면 이분탐색부터 떠올려보자. lt는 최솟값으로, rt는 가능한 최댓값으로 설정한 뒤 mid를 이용해서 최솟값을 찾는 방법이다.
 */

function solution(n, times) {
  times.sort((a, b) => a - b);
  let answer = n * times[times.length - 1]; // 가능한 최댓값

  // 최솟값을 찾기 위해 이분탐색을 활용한다.
  let [lt, rt] = [1, answer];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let ableNums = 0;
    times.forEach((time) => {
      ableNums += Math.floor(mid / time);
      if (ableNums >= n) {
        answer = Math.min(answer, mid);
        return;
      }
    });
    if (ableNums >= n) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}
