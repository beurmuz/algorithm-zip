# Baekjoon

> 제출 전 항상 [해당 사이트](https://www.jdoodle.com/execute-nodejs-online/)에서 먼저 돌려보기

### 제출, 에디터 연습 한번에 하는 법
```js
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/파일명';
let input = fs.readFileSync(file).toString().trim().split('\n');
```

### 사이트에 코드 제출할 때 input값 가져오는 방법
```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
```

### 에디터에서 연습할 때 input값 가져오는 방법
```js
const input = require('fs').readFileSync('./파일명.txt').toString().trim().split('\n');
```