// ----------------------------------------------------------------------
/**
 * 🔍 모스부호 (1) | O | 27.07.13 🔍
 */
function solution(letter) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  // 모스부호와 알파벳을 매핑
  const morseMap = new Map();
  for (let i = 0; i < morse.length; i++) {
    const char = String.fromCharCode(97 + i);
    morseMap.set(morse[i], char);
  }

  return letter
    .split(" ")
    .map((v) => morseMap.get(v))
    .join("");
}

// ----------------------------------------------------------------------
/**
 * 🔍 문자열 섞기 | O | 27.07.13 🔍
 */
function solution(str1, str2) {
  let answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }
  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 7의 개수 | O | 27.07.13 🔍
 */
function solution(array) {
  return array
    .join("")
    .split("")
    .map(Number)
    .filter((v) => v === 7).length;
}

// ----------------------------------------------------------------------
/**
 * 🔍 진료 순서 정하기 | O | 27.07.13 🔍
 */
function solution(emergency) {
  let idxEmergency = emergency
    .map((v, i) => [v, i])
    .sort((a, b) => b[0] - a[0]);

  let answer = Array(emergency.length);

  for (let i = 0; i < idxEmergency.length; i++) {
    let [v, originalIdx] = idxEmergency[i];
    answer[originalIdx] = i + 1;
  }
  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 리스트 자르기 | O | 27.07.13 🔍
 */
function solution(n, slicer, num_list) {
  let [a, b, c] = slicer;
  let answer = [];

  if (n === 1) {
    answer = num_list.slice(0, b + 1);
  } else if (n === 2) {
    answer = num_list.slice(a);
  } else if (n === 3) {
    answer = num_list.slice(a, b + 1);
  } else if (n === 4) {
    let temp = num_list.slice(a, b + 1);
    for (let i = 0; i < temp.length; i += c) {
      answer.push(temp[i]);
    }
  }

  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 ✅ 팩토리얼 | X | 27.07.13 🔍
 */
function solution(n) {
  let [factorial, count] = [1, 1];

  while (true) {
    factorial *= count;
    if (factorial > n) return count - 1;

    count++;
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 잘라서 배열로 저장하기 | O | 27.07.13 🔍
 * - 시간이 좀 걸렸다 (더 간결한 코드 짜다가..)
 */
function solution(my_str, n) {
  let answer = [];
  my_str = my_str.split("");
  let rest = my_str.length % n;
  let turn =
    rest === 0
      ? Math.floor(my_str.length / n)
      : Math.floor(my_str.length / n) + 1;

  for (let i = 0; i < turn; i++) {
    if (my_str.length >= n) answer.push(my_str.splice(0, n).join(""));
    else answer.push(my_str.splice(0).join(""));
  }

  return answer;
}

// 다른 풀이
function solution(my_str, n) {
  let result = [];
  for (let i = 0; i < my_str.length; i += n) {
    res.push(my_str.slice(i, i + n));
  }
  return result;
}

// ----------------------------------------------------------------------
/**
 * 🔍 소인수분해 | X | 27.07.13 🔍
 * - 얘는 왜 맨날 까먹지?
 */
function solution(n) {
  let answer = [];
  let i = 2;

  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);

      while (n % i === 0) {
        n = n / i;
      }
    }
    i++;
  }
  return answer;
}

// ----------------------------------------------------------------------
/**
 * 🔍 문자 개수 세기 | O | 27.07.13 🔍
 * ✅ 'A': 65
 * ✅ 'a': 97
 * - 시간이 좀 걸렸다
 */
function solution(my_string) {
  let answer = Array(52).fill(0);

  my_string.split("").forEach((alpha) => {
    let asciiCode = alpha.charCodeAt();
    let idx =
      65 <= asciiCode && asciiCode <= 90 ? asciiCode - 65 : asciiCode - 71;
    answer[idx]++;
  });
  return answer;
}

// 다른 풀이
function solution(my_string) {
  let answer = Array(52).fill(0);
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  my_string.split("").forEach((s) => {
    answer[alphabets.indexOf(s)] += 1;
  });
  return answer;
}
// ----------------------------------------------------------------------
/**
 * 🔍 컨트롤 제트 | O | 27.07.13 🔍
 */
function solution(s) {
  let answer = 0;
  s = s.split(" ");

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      // Z인 경우
      answer = answer - s[i - 1] * 1;
    } else {
      // 숫자인 경우
      answer += s[i] * 1;
    }
  }
  return answer;
}
