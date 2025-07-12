// ----------------------------------------------------------------------
/**
 * 🔍 n의 배수 고르기 | O | 27.07.12 🔍
 */
function solution(n, numlist) {
  let answer = numlist.filter((v) => v % n === 0);
  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 가위 바위 보 | O | 27.07.12 🔍
 */
function solution(rsp) {
  rsp = rsp.split("").map(Number);

  let answer = rsp.map((now) => {
    if (now === 2) {
      // 가위
      return 0;
    } else if (now === 0) {
      // 바위
      return 5;
    } else if (now === 5) {
      // 보
      return 2;
    }
  });

  return answer.join("");
}

// ----------------------------------------------------------------------
/**
 * 🔍 문자열 정렬하기 (1) | O | 27.07.12 🔍
 */
function solution(my_string) {
  let regex = /[^0-9]/g;
  let answer = my_string.replace(regex, "");

  return answer
    .split("")
    .map(Number)
    .sort((a, b) => a - b);
}
// 다른 풀이
return my_string
  .split("")
  .filter((v) => !isNaN(v))
  .map(Number)
  .sort((a, b) => a - b);

// ----------------------------------------------------------------------
/**
 * 🔍 인덱스 바꾸기 | O | 27.07.12 🔍
 */
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

// ----------------------------------------------------------------------
/**
 * 🔍 글자 이어 붙여 문자열 만들기 | O | 27.07.12 🔍
 */
function solution(my_string, index_list) {
  return index_list.map((idx) => my_string[idx]).join("");
}

// ----------------------------------------------------------------------
/**
 * 🔍 l로 만들기 | O | 27.07.12 🔍
 * ✅ 아스키코드 관련 메소드
 *    - String.charCodeAt(): 문자 -> 아스키코드 번호
 *    - String.fromCharCode(숫자): 아스키코드 번호 -> 문자
 */
function solution(myString) {
  return myString
    .split("")
    .map((v) => {
      if (v.charCodeAt() < 108) return "l";
      else return v;
    })
    .join("");
}

// ----------------------------------------------------------------------
/**
 * 🔍 조건에 맞게 수열 변환하기 3 | O | 27.07.12 🔍
 */
function solution(arr, k) {
  if (k % 2 === 1) return arr.map((v) => v * k);
  else return arr.map((v) => v + k);
}

// ----------------------------------------------------------------------
/**
 * 🔍 주사위 게임 2 | O | 27.07.12 🔍
 */
function solution(a, b, c) {
  let answer = 0;

  if (a === b && b === c) {
    answer =
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  } else if (a === b || b === c || a === c) {
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else {
    answer = a + b + c;
  }
  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 배열의 원소 삭제하기 | O | 27.07.12 🔍
 * ✅ Array.includes(searchElement [, fromIndex])
 */
function solution(arr, delete_list) {
  return arr.filter((v) => !delete_list.includes(v));
}

// ----------------------------------------------------------------------
/**
 * 🔍 배열 비교하기 | O | 27.07.12 🔍
 */
function solution(arr1, arr2) {
  if (arr1.length > arr2.length) return 1;
  else if (arr2.length > arr1.length) return -1;
  else if (arr1.length === arr2.length) {
    let arr1Sum = arr1.reduce((acc, v) => acc + v, 0);
    let arr2Sum = arr2.reduce((acc, v) => acc + v, 0);

    if (arr1Sum === arr2Sum) return 0;
    else if (arr1Sum > arr2Sum) return 1;
    else if (arr2Sum > arr1Sum) return -1;
  }
}
