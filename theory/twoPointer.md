# Two Pointer 알고리즘

- 두 개의 포인터 변수를 가지고 쭉 증가하면서 탐색하는 방법
- 시간복잡도를 확 줄여준다.
  - 원래 2개의 for문을 사용해야하는데 (시간복잡도: nlogn), 투포인터를 이용하면 하나의 for문만으로도 (시간복잡도: n+m) 끝낼 수 있기 때문이다.

## Ex01. 두 배열 합치기

- 우선 2개의 포인터를 생성과 동시에 0으로 초기화한다.
  - p1은 a에서 쓸 포인터이고, p2는 b에서 쓸 포인터이다.
- a[p1]과 b[p2]를 비교해 값이 더 작은 쪽을 answer에 push한다.
  - push한 값의 포인터는 1만큼 증가시켜 p1이 다음 칸을 가리키게끔 한다.
- p1, p2중 하나가 끝나면 아직 남은 포인터쪽 값들을 answer에 전부 push한다.

```js
function solution(a, b) {
  let answer = [];
  let n = a.length;
  let m = b.length;
  let p1 = 0; // a
  let p2 = 0; // b

  while (p1 < n && p2 < m) {
    // 둘중 하나가 거짓되면 반복이 종료된다.
    if (a[p1] <= b[p2])
      answer.push(a[p1++]); // p1이 가리키는 값을 answer에 넣고, p1을 증가시킴
    else answer.push(b[p2++]);
  }

  // 둘중 어느 것이 남은지 모르니, 둘다 while문을 이용해 남은 값을 answer에 push한다.
  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
```

## Ex02. 연속부분수열1

- 특정 수열에서 연속부분수열의 합이 M이 되는 경우 count한다.
- lt와 rt를 생성과 동시에 0으로 초기화하여 이용하기
  - sum이 m일 때 lt를 빼고 lt를 증가시킨다.
- sum은 lt~rt까지의 합

```js
function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum >= m) {
      if (sum === m) answer++;
      sum -= arr[lt++]; // lt 값을 뺀 후 lt값 1증가
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
```

> ✅ for문 안에 while문이 중첩되어 있는데 어떻게 시간 복잡도가 O(n)인가?
>
> - 시간 복잡도를 따질 때 2중 for문이라면 안쪽 for문에 속한 연산자가 몇 번 연산되는지 계산하는게 시간복잡도이다.
> - 해당 문제는 for문 안에 있는 while문이 프로그램이 종료될 때까지 몇번 반복되는지 확인해보면, arr의 길이인 n번 이상 반복하지 않게 됨을 알 수 있다.

# [Python] - Two Sum example

```py
def twoSum(nums, target):
  nums.sort()
  n = len(nums)
  lt, rt = 0, n-1

  while lt < rt:
    if nums[lt] + nums[rt] == target:
      return True
    else if nums[lt] + nums[rt] > target:
      rt = rt - 1 # rt -= 1
    else if nums[lt] + nums[rt] < target:
      lt = lt + 1 # lt += 1
  return False

print(twoSum(nums=[1, 5, 7, 2], target=4))
```
