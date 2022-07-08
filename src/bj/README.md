# Baekjoon
### 사이트에 코드 제출할 때 input값 가져오는 방법
```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
```

### 에디터에서 연습할 때 input값 가져오는 방법
```js
const input = require('fs').readFileSync('./파일명.txt').toString().trim().split('\n');
```