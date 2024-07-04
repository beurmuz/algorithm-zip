// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️좌표평면 위의 특정 구역⭐️ | X | 24.06.23, 06.27
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = Number(inputs[0]);
let points = inputs.slice(1).map((line) => line.split(" ").map((v) => +v));

let answer = Number.MAX_SAFE_INTEGER;

// 하나의 점(i번 점) 빼기
for (let i = 0; i < N; i++) {
  // 직사각형의 최소 넓이를 구하려면 최소 x&y, 최대 x&y값을 구해야한다.
  let [minX, maxX] = [Number.MAX_SAFE_INTEGER, 1];
  let [minY, maxY] = [Number.MAX_SAFE_INTEGER, 1];

  for (let j = 0; j < N; j++) {
    if (j === i) continue; // i번째 점은 건너뛴다.

    let [x, y] = points[j];

    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
  answer = Math.min(answer, (maxX - minX) * (maxY - minY));
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 물체 두 개를 정하여 완전탐색 | O | 24.07.01
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const n = 5;
const segments = [
  [1, 3],
  [2, 4],
  [5, 8],
  [6, 9],
  [7, 10],
];

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    let arr = Array(11).fill(0);

    for (let k = 0; k < n; k++) {
      if (k === i || k === j) continue;

      const [x1, x2] = segments[k];
      for (let part = x1; part <= x2; part++) {
        arr[part] += 1;
      }
    }
    let maxCnt = Math.max(...arr);
    answer = Math.min(answer, maxCnt);
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️가장 가까운 두 점 사이의 거리⭐️ | X | 24.06.22, 07.01
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
const N = Number(inputs[0]);
const points = inputs.slice(1).map((line) => line.split(" ").map(Number));

// 두 점 사이의 거리를 계산하는 함수
function getDist(n1, n2) {
  let [nx1, ny1] = points[n1];
  let [nx2, ny2] = points[n2];

  return (nx1 - nx2) * (nx1 - nx2) + (ny1 - ny2) * (ny1 - ny2);
}

let answer = Number.MAX_SAFE_INTEGER;
for (let n1 = 0; n1 < N; n1++) {
  for (let n2 = n1 + 1; n2 < N; n2++) {
    answer = Math.min(answer, getDist(n1, n2));
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 물체 세 개를 정하여 완전탐색 | O | 24.07.01
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const n = 5;
const segments = [
  [1, 3],
  [2, 4],
  [5, 8],
  [6, 9],
  [7, 10],
];

function getMaxCnt(i1, i2, i3) {
  let arr = Array(11).fill(0);

  for (let i = 0; i < n; i++) {
    if (i === i1 || i === i2 || i === i3) continue;
    const [x1, x2] = segments[i];
    for (let part = x1; part <= x2; part++) {
      arr[part] += 1;
    }
  }
  return Math.max(...arr);
}

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      let maxCnt = getMaxCnt(i, j, k);
      answer = Math.min(answer, maxCnt);
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️삼각형 만들기⭐️ | X | 24.06.26, 24.07.01
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
const N = Number(inputs[0]);
const spots = inputs.slice(1).map((line) => line.split(" ").map((v) => +v));

// 넓이를 구한다. (삼각형의 넓이에 2를 곱한 값을 반환하기)
function getArea(x1, x2, x3, y1, y2, y3) {
  // 사선 공식, 신발끈 공식을 이용해 다각형의 면적을 구한다.
  return Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - (x2 * y1 + x3 * y2 + x1 * y3));
}

let answer = 0; // 최대 넓이는 무조건 0 이상이다.
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let [x1, y1] = spots[i];
      let [x2, y2] = spots[j];
      let [x3, y3] = spots[k];

      // 세 점으로 이루어진 삼각형 중 한 면이 x축에 평행하려면, 적어도 두 점의 y좌표가 동일해야한다.
      // 세 점으로 이루어진 삼각형 중 한 면이 y축에 평행하려면, 적어도 두 점의 x좌표가 동일해야한다.
      // => 세 점 중 x좌표가 일치하는 쌍이 하나 이상, y좌표가 일치하는 쌍이 하나 있어야한다.
      if (
        (x1 === x2 || x1 === x3 || x2 === x3) &&
        (y1 === y2 || y1 === y3 || y2 === y3)
      ) {
        answer = Math.max(answer, getArea(x1, x2, x3, y1, y2, y3));
      }
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 운행되고 있는 시간 | O | 24.07.02
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const timelines = inputs.slice(1).map((line) => line.split(" ").map(Number));

let answer = 0;
for (let i = 0; i < N; i++) {
  // i는 해고할 번호
  let arr = Array(1001).fill(0);
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    let [x1, x2] = timelines[j];

    for (let x = x1; x < x2; x++) {
      arr[x] = 1;
    }
  }
  let totalTime = arr.reduce((acc, v) => acc + v, 0);
  answer = Math.max(answer, totalTime);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️겹치지 않는 선분2⭐️ | X | 24.07.02
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const lines = inputs.slice(1).map((line) => line.split(" ").map(Number));

// 선분이 겹치는 경우 1) 지정한 하나의 선분이 비교할 선분보다 x1이 크고, x2가 작은 경우
// 선분이 겹치는 경우 2) 지정한 하나의 선분이 비교할 선분보다 x1이 작고, x2가 큰 경우
// => 즉, 지정한 하나의 선분 안에 비교할 선분이 속해있거나,
//       지정한 하나의 선분이 비교할 선분에 속해있는 경우

let answer = 0;
for (let i = 0; i < N; i++) {
  // i번째 선분이 다른 선분과 겹치지 않는지 확인하기
  let meet = false;
  for (let j = 0; j < N; j++) {
    if (j === i) continue;

    // 겹치는지 검사한다.
    if (
      (lines[i][0] <= lines[j][0] && lines[i][1] >= lines[j][1]) ||
      (lines[i][0] >= lines[j][0] && lines[i][1] <= lines[j][1])
    ) {
      meet = true; // 겹치는 경우 바로 반복문을 종료한다.
      break;
    }
  }

  // 겹치지 않은 경우 answer++
  if (!meet) answer += 1;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 스승의 은혜2 | O | 24.07.02
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, B] = inputs[0].split(" ").map(Number);
const needPrice = inputs
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0; // 선물 가능한 최대 명수를 저장
for (let i = 0; i < N; i++) {
  // i번째에게 50프로 쿠폰을 쓴다.
  let totalPrice = 0;
  let peopleCount = 0;
  for (let j = 0; j < N; j++) {
    if (j === i) totalPrice += needPrice[j] / 2;
    else totalPrice += needPrice[j];

    if (totalPrice > B) break;
    peopleCount += 1;
  }
  answer = Math.max(answer, peopleCount);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️상해버린 치즈⭐️ | X | 24.07.03
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 * - 사람이 치즈를 먹지 않았거나, 아프기 시작한 순간이 치즈를 먹은 순간보다 빠르다면 모순이 발생한다는 것에 유의해야 한다.
 */
class EatInfo {
  constructor(p, m, t) {
    this.p = p;
    this.m = m;
    this.t = t;
  }
}

class SickInfo {
  constructor(p, t) {
    this.p = p;
    this.t = t;
  }
}

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, D, S] = inputs[0].split(" ").map(Number);

// 몇번째 사람(p)이 몇번째 치즈(m)를 언제 먹었는지(t)
let eatInfo = [];
for (let i = 1; i <= D; i++) {
  const [p, m, t] = inputs[i].split(" ").map(Number);
  eatInfo.push(new EatInfo(p, m, t));
}

// 몇번째 사람(p)이 언제 확실히 아팠는지(t)
let sickInfo = [];
for (let i = D + 1; i <= D + S; i++) {
  const [p, t] = inputs[i].split(" ").map(Number);
  sickInfo.push(new SickInfo(p, t));
}

let answer = 0;

// 하나의 치즈가 상했을 때 필요한 최대 약의 개수를 구한다.
//  => 해당 치즈가 몇명에게 영향을 주는지를 파악해야 함
for (let i = 1; i <= M; i++) {
  // 치즈의 개수만큼 순회하면서, i번째 치즈가 상했다고 가정하고 모순이 발생하는지 확인한다.
  // 각 사람이 언제 치즈를 먹었는지에 대한 정보를 저장
  const whenEatTime = Array.from({ length: N + 1 }, () => 0);

  // console.log(`${i}번째 치즈를 먹자! 🧀`)
  // i번째 치즈를 먹은 정보를 순회한다.
  eatInfo.forEach((info) => {
    if (info.m !== i) return;

    // 사람(p)가 i번째 치즈를 처음 먹었거나, 이전보다 더 빨리 먹게 된 경우 whenEatTime 배열을 갱신한다.
    const { p, t } = info;
    if (whenEatTime[p] === 0 || t < whenEatTime[p]) whenEatTime[p] = t;
  });

  // console.log(`${i}번째 치즈를 먹은 사람들이 언제 먹었는지에 대한 정보를 저장했다!`);
  // console.log(whenEatTime);

  // i번째 치즈가 상했을 가능성을 저장하는 변수 (가능성이 있다면 true이다.)
  let possible = true;

  // sickInfo는 단서가 된다. whenEatTime과 이를 기반으로 모순이 있는지 확인한다.
  //   모순이 발생하는 경우 1) 단서로 주어진 아픈 사람이 치즈를 먹은 기록이 없는 경우
  //   모순이 발생하는 경우 2) 단서로 주어진 아픈 사람이 아프기 시작한 시간 <= 그 사람이 치즈를 먹은 시간
  sickInfo.forEach((info) => {
    const { p, t } = info;
    if (whenEatTime[p] === 0 || t <= whenEatTime[p]) possible = false;
  });

  // if(!possible) console.log(`모순이 발생했다! 💨`);

  // i번째 치즈가 상했을 가능성이 있다면, 필요한 약의 개수를 확인한다.
  let pill = 0;
  if (possible) {
    // 한번이라도 i번째 치즈를 먹었다면, 약이 필요하다.
    for (let n = 1; n <= N; n++) {
      if (whenEatTime[n] > 0) pill += 1;
    }
  }
  answer = Math.max(answer, pill);
  // console.log('\n')
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 개발자의 순위 | O | 24.07.03
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
// ✏️ 내가 푼 방법 - 시간복잡도는 K*N + records[0]*K이다.
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [K, N] = inputs[0].split(" ").map(Number);
const matchs = inputs.slice(1).map((line) => line.split(" ").map(Number));

// 가능한 모든 경우를 찾아 records에 기록한다.
let records = [];
for (let k = 0; k < K; k++) {
  let match = [];

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      match.push(`(${matchs[k][i]},${matchs[k][j]})`);
    }
  }
  records.push(match);
}

// match[0]을 기준으로 다른 경기에도 같은 쌍이 존재하는지 검사한다.
let answer = 0;
for (let i = 0; i < records[0].length; i++) {
  let notIn = false;
  for (let j = 1; j < K; j++) {
    if (!records[j].includes(records[0][i])) notIn = true;
    if (notIn) break;
  }
  if (!notIn) answer += 1;
}
console.log(answer);

// ✏️ 풀이 방법
// 모든 개발자에 대해 2명의 개발자를 정하고, 해당 개발자의 순위 비교가 각 경기마다 바뀌지 않는지 찾는다.
// -> 2차원 배열이라 생각하고, 두 번호에 대해 하나의 열 번호가 2차원 배열의 모든 행에서 낮은 순서쌍의 개수를 찾으면 된다.
let answer = 0;

// 모든 쌍에 대해서 불변의 순위인 쌍을 찾는다.
for (let i = 1; i <= N; i++) {
  // K, N, matchs
  for (let j = 1; j <= N; j++) {
    // i 개발자가 j 개발자보다 항상 높은 순위인지 여부를 확인한다.
    // i와 j가 같은 경우 건너뛴다.
    if (i === j) continue;

    // correct: i번 개발자가 j번 개발자보다 항상 높은 순위일때 true
    let correct = true;

    matchs.forEach((list) => {
      const idxI = list.indexOf(i);
      const idxJ = list.indexOf(j);

      if (idxI > idxJ) correct = false; // idxI의 index가 더 크다는 건 idxJ보다 뒤에 있다는 뜻
    });

    if (correct) answer += 1;
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 이상한 폭탄 | O | 24.07.03
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs.slice(1).map(Number);

let answer = [];
for (let i = 0; i < N - K + 1; i++) {
  // N === K인 경우를 고려하여 i가 N-K+1 직전까지 순회할 수 있도록 한다.
  let partNums = [];
  for (let j = i; j < i + K + 1; j++) {
    if (partNums.includes(arr[j])) answer.push(arr[j]);
    partNums.push(arr[j]);
  }
}

if (answer.length) {
  console.log(Math.max(...answer));
} else console.log("-1");

// ----------------------------------------------------------------------
/**
 * 🔍 선분 3개 지우기 | O | 24.07.04
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const points = inputs.slice(1).map((line) => line.split(" ").map(Number));

let answer = 0; // 남은 선분들이 모두 겹치지 않도록 하는 서로 다른 가짓수 구하기

// 지울 3개의 선분을 선택 (순서 상관없음)
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let arr = Array(101).fill(0);

      // 3개의 선분을 지우고 남은 선분들을 배열에 기록한다.
      for (let point = 0; point < N; point++) {
        if (point === i || point === j || point === k) continue;
        let [x1, x2] = points[point];

        for (let x = x1; x <= x2; x++) {
          arr[x] += 1;
        }
      }

      // 1 이상인 곳이 있는지 검사한다.
      let findMoreNums = false;
      for (let x = 0; x < 101; x++) {
        if (arr[x] > 1) {
          findMoreNums = true;
          break;
        }
      }

      // findMoreNums가 false면 answer + 1해주기
      if (!findMoreNums) answer += 1;
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️스승의 은혜 3⭐️ | O | 24.07.04
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 * - 맞았지만 다시한번 더 풀어볼것!
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, B] = inputs[0].split(" ").map(Number);
let gifts = [];

for (let i = 1; i <= N; i++) {
  let [price, fee] = inputs[i].split(" ").map(Number);
  gifts.push([price, fee, price + fee]);
}

let answer = 0;
// i번째 학생의 선물은 반값이다.
for (let i = 0; i < N; i++) {
  let nowTotalFee = gifts[i][0] / 2 + gifts[i][1];
  let nowTotalStudents = 1;

  // 새 배열을 만들고 (선물값 + 배송비)가 작은 순서대로 정렬한다.
  let newGifts = gifts.slice(0, i).concat(gifts.slice(i + 1));
  newGifts.sort((a, b) => a[2] - b[2]);

  for (let j = 0; j < newGifts.length; j++) {
    nowTotalFee += newGifts[j][0] + newGifts[j][1];
    if (nowTotalFee > B) break;
    nowTotalStudents += 1;
  }

  answer = Math.max(answer, nowTotalStudents);
}
console.log(answer);
