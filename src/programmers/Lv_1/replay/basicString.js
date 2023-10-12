/**
 * ✅ search는 찾고자하는 문자의 위치를 return해준다.
 * ✅ '/\D/g'는 문자열 s 전체에서 알파벳을 찾는다. 알파벳이 있으면 그 위치를 return하므로 양수 값을 리턴하고, 없다면 음수 값을 리턴한다.
 * ✅ '/\d/g'는 문자열 s 전체에서 숫자만 찾는다.
 */

function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}
