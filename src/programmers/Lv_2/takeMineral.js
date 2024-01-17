/**
 * [구현]
 * - 나중에 sort를 왜 하는건지 이해하지 못했다.. 왜하지?
 */

function solution(picks, minerals) {
  let cutCount = Math.ceil(minerals.length / 5);
  // 곡갱이 개수
  let maxLen = picks.reduce((a, b) => a + b);
  if (maxLen === 0) return 0;
  // 최대 구할수 있는 개수 빼고 제거
  minerals = minerals.splice(0, maxLen * 5);

  let arr = [];
  for (let i = 0; i < cutCount; i++) {
    let obj = { diamond: 0, iron: 0, stone: 0 };

    minerals.splice(0, 5).map((element) => {
      obj[element]++;
    });
    arr.push([
      obj.diamond + obj.iron + obj.stone,
      obj.diamond * 5 + obj.iron + obj.stone,
      obj.diamond * 25 + obj.iron * 5 + obj.stone,
    ]);
  }

  arr = arr.sort((a, b) => b[2] - a[2]);

  let answer = 0;
  for (let i = 0; i < picks.length; i++) {
    let pickCount = picks[i];
    while (pickCount--) {
      if (arr.length === 0) {
        return answer;
      }
      answer += arr.shift()[i];
    }
  }
  return answer;
}
