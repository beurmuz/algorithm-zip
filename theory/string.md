# string 부분 개념 정리
## [1번 문제]
- 방법1) `.split()`와 `.reverse()`이용하기
- 방법2) `.reverse()`없이 구하는 방법
  - 문자열을 반으로 잘라서 대칭축을 기준으로 앞, 뒤의 문자가 같은지 확인하기

### 대문자를 소문자로, 소문자를 대문자로
- `toLowerCase()`: 대문자가 있다면, 대문자는 전부 소문자로 변환함
- `toUpperCase()`: 소문자가 있다면, 소문자는 전부 대문자로 변환함

### `split("")`
- `split()`는 문자열을 원소 하나하나씩 분리하여 배열에 넣어줌
- 배열화를 해야만 `reverse()`가 가능함
- `""`안에 넣어준 것을 기준으로 분리해줌
- `""`안에 아무것도 넣지 않으면 단어를 한 글자씩 분리함

### `reverse()`
- `reverse()`는 배열의 메소드
- 문자열의 경우, 반드시 `split()`을 한 후에 `reverse()`를 해야함

### `.join("")`
- `join()`은 배열을 문자열로 만들어줌
- 배열의 각각의 요소를 붙여주는 역할을 함
- `""`안에 들어간 것을 기준으로 요소를 이어줌
- `""`안에 아무것도 들어가지 않으면 하나로 연결함
- `"+"`시 요소를 + 로 연결해줌

```js
let str = "tsebehtsikkis";
let splitArr = str.split("").reverse();
let str2 = splitArr.join(" ");
console.log(str2);
```

## [2번 문제]
- 회문 문자열 = 팰린드롬
- 알파벳 이외의 문자들을 무시하라? (= 특수기호 이런거 다 빼라!)

### 정규 표현식으로 알파벳만 추출하는 방법 `.replace(/[^a-z]/g, '')`
- (= 특수기호를 전부 빼는 방법)
- `/[^a-z]` : 소문자 a-z까지가 아닌 것들
- `/g` : 전체 영역에서 찾아라 
- `.replace("바꿀 것들", "대체할 것");`

## [3번 문제]
### `parseInt()`
- 만약 문자열이 `0534`이라면, `parseInt()`를 사용했을 시 `534`가 출력됨

### `isNaN(x)`
- `()`안의 값이 숫자인지 아닌지 물어보는 메서드
- `()`안의 값이 숫자이면 거짓, 숫자가 아니면 참이 출력됨
  
## [4번 문제]
- 반복문을 이용하여 왼쪽 -> 오른쪽, 오른쪽 -> 왼쪽으로 도는 경우를 나누어 계산하기



## padStart(자릿수, 시작수)
- padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
- cf. [MDN padStart](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [자릿수 채우는 또다른 방법](https://sosohanya.tistory.com/80)

## 10진수 2진수로 변환?
```js
// 형식
숫자.toString(진수)

// example
6.toString(2);
```

## localeCompare() ????
- 인수로 지정된 문자열이 정렬상 string 객체의 문자열 뒤에 있으면 음수, 앞에 있으면 양수, 동등한 경우에는 0을 반환한다.
```js
var str = "JavaScript";

// 인수 'apple'은 'JavaScript'보다는 앞쪽에 있다.
console.log(str.localeCompare("apple")); // 1

// 인수 'naver'은 'JavaScript'보다는 뒤쪽에 있다.
console.log(str.localeCompare("naver")); // -1

// 인수 'JavaScript'는 'JavaScript'와 동등한 위치에 있다.
console.log(str.localeCompare("JavaScript")); // 0
```
ch.[localeCompare()](http://www.devdic.com/javascript/refer/NATIVE/method:1379/localeCompare())

