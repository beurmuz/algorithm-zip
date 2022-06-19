// 제출 코드
/*
    정규표현식을 자유자재로 사용하지 못해서 열심히 검색했다. 간단히 정리해보자면
    - /w: word 문자
    - /g: 조건에 해당하는 모든 문자 추출
    - /[a-z]/g: a-z를 제외한 나머지 것들 추출 (숫자, 특수기호 등)
    - /[^a-z]/g: a-z사이에 있는 것들만 추출(즉, 알파벳 소문자만 추출)
    - ^: 문장의 시작
    - $: 문장의 끝
    - .{2,}: .이 최소 2개 이상인 경우
    - |: 또는

    마지막에 길이가 2보다 작은 경우에는 해당 문자열의 마지막 문자를 길이가 3이 될때까지 repeat을 이용해 반복한다.
*/
function solution(new_id) {
    const answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, '');
    const strLength = answer.length;
    return strLength > 2 ? answer : answer + answer.charAt(strLength-1).repeat(3-strLength);
}



// 정규 표현식 사용하지않고 푸는법
const solution = id => {
  id = id.toLowerCase()
  id = removeInvalidChar(id)
  id = removeInvalidDots(id)

  if (!id) {
    id = 'a'
  }

  if (id.length > 15) {
    id = id.slice(0, 15)
  }

  id = removeInvalidDots(id)

  if (id.length < 3) {
    let lastChild = id.charAt(id.length - 1)

    do {
      id += lastChild
    }
    while (id.length === 2)
  }

  return id
}

const removeStrIndex = (str, index) => {
  let result = str.split('')
  result.splice(index, 1)

  return result.join('')
}

const removeInvalidChar = str => {
  for (let i = 0; i < str.length; i++) {
    if (!(
      str.charCodeAt(i) === 45 ||
      str.charCodeAt(i) === 46 ||
      str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 ||
      str.charCodeAt(i) === 95 ||
      str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
    )) {
      str = str.replace(str[i], '')
      i--
    }
  }

  return str
}

const removeInvalidDots = str => {
  do {
    str = str.replace('..', '.')
  }
  while (str.indexOf('..') > -1)

  if (str.startsWith('.')) {
    str = removeStrIndex(str, 0)
  }
  if (str.endsWith('.')) {
    str = removeStrIndex(str, str.length - 1)
  }

  return str
}