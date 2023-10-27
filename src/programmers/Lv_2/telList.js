"use strict";

/**
 * [해시]
 * - 해시 문제라는데 왜 해시인지는 모르겠다. 아무리 생각해도 substring밖에 생각나지않아..
 * - 결국 풀이를 참고했는데 문자인 점을 고려해 sort를 하고, 앞의 번호가 뒷 번호의 앞과 같다면 false를 리턴한다.
 */

function solution(phone_book) {
  let answer = true;
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length))
      return false;
  }
  return answer;
}

// 다른 풀이
// startWith을 사용한 방법이다.
function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}
