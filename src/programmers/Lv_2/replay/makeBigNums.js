/**
 * [그리디]
 * - 그리디는 너무 어려웡..
 *   - 처음에는 내림차순 정렬 후, 맨 뒤의 숫자를 삭제하려 했으나 '순서'가 유지되지 않아 실패했고,
 *   - for문과 while문으로 배열을 탐색하면서 작은 숫자를 k개에 맞게 삭제하려 했으나 이렇게되면 테케3은 오답이 되므로 결국 풀이를 보았다.
 */

function solution(number, k) {
  let answer = [0];
  let deleteCount = -1;

  for (let i = 0; i < number.length; i++) {
    while (deleteCount < k && number[i] > answer[answer.length - 1]) {
      answer.pop();
      deleteCount++;
    }
    if (answer.length < number.length - k) answer.push(number[i]);
  }
  return answer.join("");
}

console.log(solution("1231234", 3));
