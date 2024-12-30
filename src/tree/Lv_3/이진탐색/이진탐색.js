// ----------------------------------------------------------------------
/**
 * 🔍 bound 1 | O | 24.12.30 🔍
 */
function lower_bound(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let min_idx = arr.length; // ✅ 최댓값으로 변수를 초기화한다.

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      right = mid - 1; // ✅ 왼쪽 조건을 만족하는 숫자가 더 있을 수도 있으니, right를 바꿔준다.
      min_idx = Math.min(min_idx, mid);
    } else left = mid + 1;
  }
  return min_idx;
}
