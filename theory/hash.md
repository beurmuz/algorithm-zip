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
myMap.forEach(function(key, value) {
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
hashObject.set('key', value);
```

 - 기존 키가 있는경우 그걸 증가시켜줘야 함
```js
hashObject.get('key')+1;
```

 - 해당 키가 있는지 알아보는 법
```js
hashObject.has('key'); // boolean형태로 리턴됨
```

---
# 아나그램(Anagram)
- 두 문자열이 알파벳의 나열 순서는 다르지만, 그 구성이 일치하는 경우 두 단어를 아나그램이라고 부름