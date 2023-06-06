const [n, ...students] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * [정렬 문제]
 * - 조건에 따라 정렬한 후, 이름만 출력한다.
 */
const solution = (n, students) => {
  const arr = students.map((v) => v.split(" ").map((vv) => Number(vv) || vv));
  const names = [];

  arr.sort((a, b) => {
    if (a[1] < b[1]) return 1; // return 1은 a가 b 뒤에 오는 것이다.
    else if (a[1] > b[1]) return -1; // return -1은 a가 b 앞에 오는 것이다.
    else {
      // 국어 점수가 같은 경우 -> 영어 점수가 증가하는 순서로
      if (a[2] > b[2]) return 1;
      else if (a[2] < b[2]) return -1;
      else {
        // 국어, 영어 점수가 같은 경우 -> 수학 점수가 감소하는 순서로
        if (a[3] < b[3]) return 1;
        else if (a[3] > b[3]) return -1;
        else {
          // 모든 점수가 같은 경우 -> 이름을 사전 순으로 증가하게끔
          if (a[0] > b[0]) return 1;
          else if (a[0] < b[0]) return -1;
          else return 0;
        }
      }
    }
  });
  arr.forEach((line) => names.push(line[0]));
  return names.join("\n");
};

console.log(solution(+n, students));
