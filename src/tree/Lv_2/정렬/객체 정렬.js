// ----------------------------------------------------------------------
/**
 * 🔍 키를 기준으로 정렬 | O | 24.05.23 🔍
 *
 * [정렬 - 객체 정렬]
 */
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;

// 클래스 선언
class Baby {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

let babies = [];
for (let i = 0; i < N; i++) {
  let [n, h, w] = inputs[i].split(" ");
  babies.push(new Baby(n, +h, +w));
}

// 키를 기준으로 오름차순 정렬
babies.sort((a, b) => a.height - b.height);
for (let i in babies) {
  console.log(`${babies[i].name} ${babies[i].height} ${babies[i].weight}`);
}

// ----------------------------------------------------------------------
/**
 * 🔍 국영수 순이지 | O | 24.05.23 🔍
 *
 * [정렬 - 객체 정렬]
 */
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;

// 클래스 선언
class Students {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
  }
}

let students = [];
for (let i = 0; i < N; i++) {
  let [n, k, e, m] = inputs[i].split(" ");
  students.push(new Students(n, +k, +e, +m));
}

// 국어, 영어, 수학 순서대로 정렬하기
students.sort((a, b) => {
  if (a.kor === b.kor) {
    if (a.eng === b.eng) {
      return b.math - a.math;
    }
    return b.eng - a.eng;
  }
  return b.kor - a.kor;
});

for (let i in students) {
  console.log(
    `${students[i].name} ${students[i].kor} ${students[i].eng} ${students[i].math}`
  );
}

// ----------------------------------------------------------------------
/**
 * 🔍 총점 비교 | O | 24.05.23 🔍
 *
 * [정렬 - 객체 정렬]
 */
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;

// 클래스 선언
class Students {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
  }
}

let students = [];
for (let i = 0; i < N; i++) {
  let [n, k, e, m] = inputs[i].split(" ");
  students.push(new Students(n, +k, +e, +m));
}
// 세 과목의 합이 적은 순서대로 정렬(= 오름차순)
students.sort((a, b) => {
  return a.kor + a.eng + a.math - (b.kor + b.eng + b.math);
});

for (let i in students) {
  console.log(
    `${students[i].name} ${students[i].kor} ${students[i].eng} ${students[i].math}`
  );
}

// ----------------------------------------------------------------------
/**
 * 🔍 줄 세우기 | O | 24.05.23 🔍
 *
 * [정렬 - 객체 정렬]
 */
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;

// 클래스 선언
class Students {
  constructor(height, weight, nums) {
    this.height = height;
    this.weight = weight;
    this.nums = nums;
  }
}

let students = [];
for (let i = 0; i < N; i++) {
  let [h, w] = inputs[i].split(" ").map((v) => +v);
  students.push(new Students(h, w, i + 1));
}

// 정렬
students.sort((a, b) => {
  if (a.height === b.height) {
    if (a.weight === b.weight) {
      return a.nums - b.nums;
    }
    return b.weight - a.weight;
  }
  return b.height - a.height;
});

for (let i in students) {
  console.log(
    `${students[i].height} ${students[i].weight} ${students[i].nums}`
  );
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️개인 정보⭐️ | O | 24.05.23 🔍
 *
 * [정렬 - 객체 정렬]
 * - ⭐️ 문자열의 정렬은 String.prototype.localeCompare()을 쓰면 된다.
 * - ⭐️ 소수점 출력은 String.prototype.toFixed()를 쓰면 된다.
 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class PersonalInfo {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

let infos = [];
for (let i = 0; i < input.length; i++) {
  let [n, h, w] = input[i].split(" ");
  infos.push(new PersonalInfo(n, +h, (+w).toFixed(1)));
}

// 이름순(이름 오름차순) 정렬 및 출력
infos.sort((a, b) => a.name.localeCompare(b.name));
console.log("name");
for (let i in infos) {
  console.log(`${infos[i].name} ${infos[i].height} ${infos[i].weight}`);
}
console.log();

// 키순(키 내림차순) 정렬 및 출력
infos.sort((a, b) => b.height - a.height);
console.log("height");
for (let i in infos) {
  console.log(`${infos[i].name} ${infos[i].height} ${infos[i].weight}`);
}

// ----------------------------------------------------------------------
/**
 * 🔍 키, 몸무게 기준으로 정렬 | O | 24.05.23 🔍
 *
 * [정렬 - 객체 정렬]
 */
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;

// 클래스 선언
class User {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

let users = [];
for (let i = 0; i < N; i++) {
  let [n, h, w] = inputs[i].split(" ");
  users.push(new User(n, +h, +w));
}

// 키를 기준으로 오름차순. (단, 키가 같으면 몸무게 내림차순으로)
users.sort((a, b) => {
  if (a.height === b.height) return b.weight - a.weight;
  return a.height - b.height;
});

for (let i in users) {
  console.log(`${users[i].name} ${users[i].height} ${users[i].weight}`);
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️정렬된 숫자 위치 알아내기⭐️ | O | 24.05.23 🔍
 *
 * [정렬 - 객체 정렬]
 */
let [N, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;
arr = arr.split(" ").map((v) => +v);

class Num {
  constructor(n, idx) {
    this.n = n;
    this.idx = idx;
  }
}

let original = [];
for (let i = 0; i < N; i++) {
  original.push(new Num(arr[i], i));
}

// 정렬하기
original.sort((a, b) => {
  if (a.n === b.n) return a.idx - b.idx;
  return a.n - b.n;
});

// 이동한 위치 출력하기
let answer = Array(N).fill(0);
for (let i = 0; i < N; i++) {
  answer[original[i].idx] = i + 1; // answers는 정렬된 값의 인덱스를 이용하여 이동한 위치 정보를 출력한다.
}
console.log(answer.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 줄 세우기2 | O | 24.05.23 🔍
 *
 * [정렬 - 객체 정렬]
 */
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;

class Student {
  constructor(height, weight, num) {
    this.height = height;
    this.weight = weight;
    this.num = num;
  }
}

let students = [];
for (let i = 0; i < N; i++) {
  let [h, w] = inputs[i].split(" ").map((v) => +v);
  students.push(new Student(h, w, i + 1));
}

// 정렬
students.sort((a, b) => {
  if (a.height === b.height) return b.weight - a.weight;
  return a.height - b.height;
});

for (let i = 0; i < N; i++) {
  console.log(`${students[i].height} ${students[i].weight} ${students[i].num}`);
}
