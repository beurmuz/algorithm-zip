# array 부분 개념 정리
## for문에 대하여
- for in 반복문 : 객체의 모든 열거 가능한 속성(property)에 대한 반복
- for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용
---
## `Array.from(길이, 초기화)`
- `Array.from({length:5}, ()=>1)` 형태는 다음을 의미함
  - 길이는 5로 하기
  - 콜백함수를 이용하여 5개의 칸 모두 1로 초기화하기