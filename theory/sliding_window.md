# 슬라이딩 윈도우

- 창문을 만들어 옆으로 밀고 나가는 방법
- 슬라이딩 윈도우를 이용하면 시간 복잡도를 훅 줄일 수 있다.
- 일정한 크기를 밀고 나가려면 옆으로 밀 때마다 `기존 값 하나 삭제, 새로운 값 추가, 기존 값 하네 삭제, 새로운 값 추가..` 이를 반복하면 된다.

```js
function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]; // 여기서 슬라이딩 윈도우가 발생한다.
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
```
