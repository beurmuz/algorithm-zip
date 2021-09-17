# List
(정답 여부, 풀이영상 시청 여부)
1. 자리수의 합 (O, 시청함)
2. 뒤집은 소수 (X, 시청함)
3. 멘토링 (X, 시청함)
4. 졸업 선물 (X, 시청 예정)
5. K번째 큰 수 (X, 시청 예정)


---
# brute_force(완전 탐색) 부분 개념 정리
## [1번] toString()함수 - 숫자를 string화 하는 방법
### 문자 배열화 - `toString().split('');`
- `문자.toString().split('').reduce((a,b) => a+b,0)`를 하면
- 문자를 string화 하고, 각 글자를 split하여 쪼갠 후, 이를 a에 누적하는 것
- 이 때, b에 각 글자가 들어가며 이를 a에 누적해 각 자릿수의 합을 구함
- 초기화 값은 0으로 함

## [2번] 숫자 뒤집기
- 어떤 숫자든 10으로 나눈 나머지 값은 일의 자리이고,
- 10으로 나눈 몫은 일의 자리를 제외한 앞의 숫자임

### 약수 구하기 `isPrime()`
- 어떤 숫자든 1과 자기 자신을 빼면 가장 큰 약수는 자기 자신/2
- (=> 그래서 제곱근(Math.squr())까지만 보라고 하는 것)

```js
function isPrime(num){
    if(num===1) { // 1은 소수도 합성수도 아님
        return false;
    }

    // [방법1]
    for(let i = 2; i < parseInt(num/2); i++) {
        // 1과 num(자기자신)은 약수가 맞음
        // 만약 15가 들어오면 2~parseInt(15/2)까지 반복함 
        if(num%i===0) {
            // 이게 발견되면 i가 num의 약수인 것
            return false;
        }
    }
    return true;
}
```

- 제곱근까지만 도는 방법

```js
// [방법2]
for(let i =2; i <= parseInt(Math.sqrt(num)); i++) {
    // ...
}
```