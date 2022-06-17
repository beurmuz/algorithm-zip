# array 부분 개념 정리
## for문에 대하여
- for in 반복문 : 객체의 모든 열거 가능한 속성(property)에 대한 반복
- for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용
---
## `Array.from(길이, 초기화)`
- `Array.from({length:5}, ()=>1)` 형태는 다음을 의미함
  - 길이는 5로 하기
  - 콜백함수를 이용하여 5개의 칸 모두 1로 초기화하기

## `set()`으로 중복제거하기
```js
const arrDup = ['라이언', '어피치', '프로도', '콘', '라이언', '프로도'];
const arrUnique = [...new Set(arrDup)];
console.log(arrUnique); // ['라이언', '어피치', '프로도', '콘']
```
cf. https://blogpack.tistory.com/1068


## `reduce()`로 2차원배열 1차원 배열로 만들기
```js
const arr = [['a', 'b'], ['c', 'd'], ['e', 'f']];

const arr2 = arr.reduce(function (acc, cur) {
  return [...acc, ...cur];
});

console.log(arr2);
```

ch. https://codechacha.com/ko/javascript-flatten-array/