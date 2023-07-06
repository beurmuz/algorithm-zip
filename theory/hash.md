# hash 풀이방법

- 해시는 javascript의 map 이용

## Map()

- `Map` Object는 key-value 쌍을 보유하고, key의 원래 삽입 순서를 기억함
- 객체 및 기본 값 모두는 key또는 value로 사용할 수 있음
- 삽입 순서로 요소를 반복함
- Map key를 value로 설정하고, 해당 값을 검색, 삭제, 저장된 여부를 확인할 수 있다는 점에서 `Object`와 유사하나 속성 설정 방법이 다름

### instant 속성

1. Map.prototype.size()

- size 접근자 속성은 개체의 요소 수를 반환함

### instant methode

1. Map.prototype.clear()

- 개체에서 모든 key-value 쌍을 제거

2. Map.prototype.delete(key)

- 해당 key가 있는 경우 제거되어 true를 반환하고, 없는 경우 false를 반환

3. Map.prototype.has(key)

- key가 있는지 없는지를 boolean형태로 반환

4. Map.prototype.set(key, value)

- key와 value를 설정할 수 있음
- Map object를 반환함

### forEach()로 map 반복하기

```js
myMap.forEach(function (key, value) {
  console.log(`${key}=${value}`);
});
```

---

# hash 생성방법

1. 우선 Map()으로 hashObject를 만들어준다.

```js
let hashObject = new Map();
```

- Map이라는 class의 생성자를 호출하면 map이라는 해시 객체가 생성됨
- hashObject는 `key`와 `value`로 구성되어있음

2. 객체 메소드인 `.set()`을 이용해서 다음과 같이 만들어줄 수 있음

- 기존 키가 없는 경우

```js
hashObject.set("key", value);
```

- 기존 키가 있는경우 그걸 증가시켜줘야 함

```js
hashObject.get("key") + 1;
```

- 해당 키가 있는지 알아보는 법

```js
hashObject.has("key"); // boolean형태로 리턴됨
```

---

# 아나그램(Anagram)

- 두 문자열이 알파벳의 나열 순서는 다르지만, 그 구성이 일치하는 경우 두 단어를 아나그램이라고 부름

# 활용 예시

## 1. [Python] Two sum 문제에 dictionary 적용해보기

- Python의 Dictionary는 Hash Table로 만들어졌다.

### 1. dictionary 이용하기

```py
def twoSum(nums, target):
    dicts = {} # dictionary 선언

    # nums에 있는 값을 dicts에 넣어주기: O(n)
    for v in nums:
        dicts[v] = 1

    # dicts를 순회하며 합이 target이 되는 값이 있는지 찾기: O(n)
    for v in nums:
        restNum = target - v
        if restNum in dicts: # dictionary 안에 있는지! (=> dicts가 아닌 nums안에서 찾으면 시간복잡도가 O(1)이 아닌 O(n)이 된다.)
            if restNum != v: # 중복은 허용하지 않으므로 restNum과 v가 다른 경우에만 True를 return한다.
                return True
    return False

print(twoSum(nums = [1, 5, 7, 8, 4], target = 10))
```

### 2. set 이용하기

```py
def twoSum(nums, target):
  numsSet = set(nums) # nums 리스트를 set으로 만든다.

  for num in numsSet: # 순회: O(n)
    rest = target - num
    if rest in numsSet: # numsSet에 rest가 있다면
      if rest != num: # 중복은 허용하지 X
        return True
  return False


print(twoSum(nums=[2, 1, 8, 5, 9, 6], target=12))
```

## 2. [Python] 가장 긴 연속된 수열

### 1. 가장 직관적으로 풀어보기

- O(n^3)

```py
for i in range(n):
    while nx in numsArray:
        cnt += 1
        nx += 1
```

### 2. dict 이용해보기

- O(n^2)

```py
for i in range(n):
    while nx in numsDictionary:
        cnt += 1
        nx += 1
```

### 3. 정렬하고 풀어보기

- O(n log n)
  - 정렬 시 O(n log n) + 전체 배열 탐색 시 O(n)

```py
nums = [3, 4, 2, 1, 100, 200]
nums.sort() # O(n log n)
answer = 0
cnt = 1

for i in range(len(nums)):
    if nums[i-1] + 1 == nums[i]:
        cnt += 1
        answer = max(cnt, answer) # cnt과 answer중 더 큰 값을 answer로 갱신한다.
    else:
        cnt = 1

print(answer)
```

### 4. (최종) ⭐ if문으로 반복되는 수 줄이기

- O(n^2) 보다는 확실히 적은 O(2n) = O(n)에 가까워진다.
- 앞선 수가 numsDictionary에 없다면 시작점으로 잡고 while문을 실행한다.

```py
for i in range(n): # n
    if prev not in numsDictionary:
        while nx in numsDictionary: # n
            count += 1
            nx += 1
```

```py
def continiousNums(nums):
    if len(nums) == 0:
        return 0

    answer = 0
    numsDict = {}

    # Dictionary에 key값으로 넣기: O(n)
    for num in nums:
        numsDict[num] = 1

    # 가장 긴 연속된 수열 찾기
    for num in numsDict: # numsDict에 있는 값들을 순회: O(n)
        # 만약 현재 값 - 1인 값이 있다면
        if num - 1 not in numsDict: # ⭐ 현재 값 -1인 값이 없을 때 (이게 첫 지점이 된다.)
            cnt = 1
            target = num + 1
            while target in numsDict: # numsDict에 있는 key값 중에서 target과 같은 값이 있는지 찾는다. O(1)
                cnt += 1
                target += 1
            answer = max(answer, cnt)
    return answer

print(continiousNums([100, 4, 5, 4, 7, 6]))
```

### 5. (+ 확장) HashSet 이용해서 풀기

- Dictionary가 아닌 hashset을 이용하는 방법도 있다.
- hashset을 이용하면 dictionary를 이용할 때 value값을 고려할 필요가 없다.
- hashset도 hashtable, dictionary랑 동작 원리가 똑같다.

```py
def continiousNums(nums):
    if len(nums) == 0:
        return 0

    answer = 1
    numsSet = set(nums)

    for num in numsSet: # numsSet을 순회한다. : O(n)
        if num-1 not in numsSet: # numsSet안에 num-1이 없다면, 시작점이 된다.
            target = num + 1
            cnt = 1
            while target in numsSet:
                cnt += 1
                target += 1
                if cnt > answer:
                    answer = cnt
    return answer

print(continiousNums([100, 4, 5, 4, 7, 6]))
```
