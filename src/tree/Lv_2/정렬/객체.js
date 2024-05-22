// ----------------------------------------------------------------------
/**
 * 🔍 007 | O | 24.05.22 🔍
 *
 * [정렬 - 객체]
 */
const [code, location, time] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

class Appointment {
  constructor(code, location, time) {
    this.code = code;
    this.location = location;
    this.time = time;
  }
}

const ap = new Appointment(code, location, time);
console.log(`secret code : ${ap.code}`);
console.log(`meeting point : ${ap.location}`);
console.log(`time : ${ap.time}`);

// ----------------------------------------------------------------------
/**
 * 🔍 Next Level | O | 24.05.22 🔍
 *
 * [정렬 - 객체]
 */
const [id, level] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

class Info {
  constructor(id = "codetree", level = 10) {
    this.id = id;
    this.level = level;
  }
}

const info1 = new Info();
console.log(`user ${info1.id} lv ${info1.level}`);

const info2 = new Info(id, level);
console.log(`user ${info2.id} lv ${info2.level}`);

// ----------------------------------------------------------------------
/**
 * 🔍 코드 네임 | O | 24.05.22 🔍
 *
 * [정렬 - 객체]
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

// 클래스 선언
class Agent {
  constructor(codename = "", score = 0) {
    this.codename = codename;
    this.score = score;
  }
}

// 변수 선언 및 입력
// let agents = Array.from({ length: 5 }, () => new Agent());
let agents = [];
for (let i = 0; i < 5; i++) {
  agents.push(new Agent(inputs[i][0], +inputs[i][1]));
}

// 최소 점수 찾기
let [minName, minScore] = [0, Number.MAX_SAFE_INTEGER];
for (let agent of agents) {
  if (minScore > agent.score) {
    minScore = agent.score;
    minName = agent.codename;
  }
}

console.log(`${minName} ${minScore}`);

// ----------------------------------------------------------------------
/**
 * 🔍 폭탄 해체 | O | 24.05.22 🔍
 *
 * [정렬 - 객체]
 */
const [code, lineColor, seconds] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

class LineInfo {
  constructor(code, lineColor, seconds) {
    this.code = code;
    this.lineColor = lineColor;
    this.seconds = seconds;
  }
}

const cutLine = new LineInfo(code, lineColor, seconds);
console.log(`code : ${cutLine.code}
color : ${cutLine.lineColor}
second : ${cutLine.seconds}`);

// ----------------------------------------------------------------------
/**
 * 🔍 상품 코드 | O | 24.05.22 🔍
 *
 * [정렬 - 객체]
 */
const [name, code] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

class Goods {
  constructor(name = "codetree", code = 50) {
    this.name = name;
    this.code = code;
  }
}

const g1 = new Goods();
console.log(`product ${g1.code} is ${g1.name}`);
const g2 = new Goods(name, code);
console.log(`product ${g2.code} is ${g2.name}`);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️사는 지역⭐️ | O | 24.05.22 🔍
 *
 * [정렬 - 객체]
 * - 한번 더 풀어보기
 * - 클래스로 여러 객체가 담긴 배열을 만든 후, 배열을 정렬해서 가장 뒷값을 뽑아낸다.
 */
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

N = +N;

// 클래스 선언
class Customer {
  constructor(name = "", addr = "", city = "") {
    this.name = name;
    this.addr = addr;
    this.city = city;
  }
}

// 변수 생성 및 입력 & 이름과 인덱스를 저장하는 배열 생성
let customers = [];
let slower = [];
for (let i = 0; i < N; i++) {
  customers.push(new Customer(...inputs[i]));
  slower.push([inputs[i][0], i]);
}

// 이름을 사전순으로 정렬
slower.sort();

// 출력
console.log(`name ${customers[slower[N - 1][1]].name}`);
console.log(`addr ${customers[slower[N - 1][1]].addr}`);
console.log(`city ${customers[slower[N - 1][1]].city}`);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️비 오는 날⭐️ | O | 24.05.22 🔍
 *
 * [정렬 - 객체]
 * - ⭐️날짜 정렬 방법: new Date(a) - new Date(b)⭐️
 */
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

N = +N;

// 클래스 선언
class Weather {
  constructor(date = 0, day = "", weather = "") {
    this.date = date;
    this.day = day;
    this.weather = weather;
  }
}

// 날씨 정보 입력 & 비오는 날들만 배열로 생성
let weathers = [];
let rainDates = [];
for (let i = 0; i < N; i++) {
  weathers.push(new Weather(...inputs[i]));
  if (inputs[i][2] === "Rain") {
    rainDates.push([inputs[i][0], i]);
  }
}

// 날짜 순 정렬하기
rainDates.sort((a, b) => new Date(a[0]) - new Date(b[0]));

console.log(
  `${weathers[rainDates[0][1]].date} ${weathers[rainDates[0][1]].day} ${
    weathers[rainDates[0][1]].weather
  }`
);
