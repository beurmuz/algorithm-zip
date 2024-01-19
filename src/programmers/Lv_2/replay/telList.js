/**
 * [정렬 문제]
 * - startsWith()을 이용하면 특정 단어가 접두어인지 그 유무를 쉽게 확인할 수 있다.
 * - 입력값이 최대, 즉 10^6일 수 있으므로 O(n)이어야한다. 2중 for문을 활용해서 비교할 순 없으므로 시간복잡도가 O(n log n)인 sort를 활용하면 될 것 같았다.
 */

function solution(phone_book) {
  let answer = true;
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      // phone_book[i]가 phone_book[i+1]의 접두어라면
      return false; // false를 return 한다.
    }
  }
  return answer;
}
