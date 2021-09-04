# List
(정답 여부, 풀이영상 시청 여부)
1. 세 수 중 최솟값 (O, X)
   - 조건문
2. 삼각형 판별하기 (O, 시청함)
   - 조건문
3. 연필 개수 (O, X)
   - `Math.ceil()` : 올림
4. 1부터 N까지의 합 (O, X)
   - 반복문
5. 최솟값 구하기 (O, 시청함)
   - 반복문
6. 홀수 (O, X)
   - 반복문, 조건문 
7. 10부제 (O, X)
   - 반복문, 조건문 
8. 일곱 난쟁이 (X, 시청 예정)
   - 
9.  A를 #으로 (O, 시청 예정)
    - `repalce(A,B)`
    - 반복문, 조건문
10. 문자 찾기 (O, X)
    - 반복문, 조건문
11. 대문자 찾기 (O, X)
    - `.toUpperCase()`
    - 반복문, 조건문
12. 대문자로 통일 (O, X) 
    - `toUpperCase()`
    - 반복문, 조건문
13. 대소문자 변환
    - `toUpperCase()`, `toLowerCase()`
    - 반복문, 조건문
14. 가장 긴 문자열 (O, X)
    - 반복문, 조건문
15. 가운데 문자 출력 (O, 시청 예정)
    - `Math.floor()`, `배열.push()`
    - 조건문
16. 중복 문자 제거 (O, 시청 예정)
    - `Set`으로 중복 글자 제거
    - 배열, 반복문 이용
    - `...` 이용
17. 중복 단어 제거 
    - `Set`으로 중복 단어 제거 
    - `...` 이용
---
# Basic 부분 개념 정리
## [#5 보충] `Math.min()`과 `Math.max()` 
- for문을 돌지 않고도 내장함수를 이용해서 최솟값, 최댓값을 구할 수 있음
- `()` 안에 인자가 들어가야함 -> 배열 객체를 넘겨서는 안됨

### 1. `...`전개 연산자 이용하기

    ```js
    // Math.min()에 배열 객체를 넘기는 경우
    let arr = [5,1,2,6,7,3];
    console.log(Math.min(arr)); // NaN 출력

    // Math.min()에 전개 연산자를 사용한 경우
    // ...arr는 (arr[0], arr[1], arr[2], ..., arr[5]) 이런 식
     console.log(Math.min(...arr)); // 1 출력
     console.log(Math.max(...arr)); // 7 출력
    ```

### 2. `Math.min.apply(null, arr)` 이용하기
- 첫번째 인자는 객체를 넘겨야 함 (null)
- 두번째 인자에 해당 배열 객체를 넘겨줌

```js
console.log(Math.min.apply(null, arr)); // 1
```

---
## [#7 보충] 고차함수(forEach, map, filter, reduce)
- 고차함수는 매개변수로 함수를 전달 받음
- 매개변수로 함수를 받는 것을 callback 함수라 함
- 이 함수들은 callback함수를 반복호출 함
  
### 1. forEach
- for문 대신 사용하는 것 
- forEach는 배열 요소를 하나씩 탐색하면서, 탐색할 때마다 콜백함수를 호출함
- 
```js
a = [10, 11, 12, 13, 14, 15];
a.forEach(function(value, i){ // v: 값, i: 인덱스
    console.log(value, i, this); // this는 [1, 2];
}, [1, 2]);
```

### 2. map
- 원본 배열의 요소를 하나하나 탐색하면서, 요소를 이용해서 새로운 배열을 생성함
- map의 작동방법
  - `a.map`을 하면 map이 빈 배열을 하나 만들고, for문을 돌면서 callback함수가 리턴한 값을 새로운 배열의 원소 값으로 넣어줌(push)
- **map이 새로 생성한 빈 배열은 항상 원본 배열의 길이와 동일함**

```js
a = [10, 11, 12, 13, 14, 15];
let answer = a.map(function(value, i){
    return value*value;
}, [1, 2]);
console.log(answer); // [100, 121, 144, 169, 196, 225]

// map은 항상 원본 배열의 길이와 동일한 배열을 생성
a = [10, 11, 12, 13, 14, 15];
answer = a.map(function(value, i){
    if(value%2)===0 return v; // a 배열의 값이 짝수인 경우만 출력
}, [1, 2]);
console.log(answer); // [10, undefined, 12, undefined, 14, undefined];
```

### 3. filter
- filter도 새로운 배열을 생성해서 리턴받음
- 원본 배열의 요소들 중에서 특정 값들만 필터링한 것
- callback함수가 true의 값을 리턴해준, 원소만으로 배열을 생성해줌 
  - 길이가 원본 배열과 다를 수 있음 **(map과의 차이점)**

```js
a = [10, 11, 12, 13, 14, 15];
answer = a.filter(function(value, i){
    return value$2===0; // 짝수에서만 참
}, [1, 2]);
console.log(answer); // [10, 12, 14]
```

### 4. reduce
- 첫번째 인자로 콜백함수를 받고, 두번째 인수는 초기화하는 값
- reduce는 배열을 생성하는 것이 아닌, **값**을 생성함

```js
function reduce(predicate, value) {
    let result = value;
    for(let i = 0; i < a.length; i++) {
        result = predicate(result, a[i]); // 10, 21, 33, 46, 60
        // result를 첫번째 인자로 먼저 넘기고, 원본 배열 값을 넘김
    }
    return result; // 75
}
```

```js
a = [10, 11, 12, 13, 14, 15];
answer = a.reduce(function(acc, value){ // acc는 누적값(리턴한 값이 넘어오는 부분)
    return acc+value; 
}, 0); // result를 0으로 초기화 
console.log(answer); // 75
```