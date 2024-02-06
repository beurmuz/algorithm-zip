/**
 * [완전 탐색]
 */

// 1. 첫번째 풀이(23.5/100.0)
const solution = (n, stations, w) => {
  let answer = 0;
  let idx = 0;
  let start = 1;

  while (start <= n) {
    if (start >= stations[idx] - w && start <= stations[idx] + w) {
      // start가 stations - w 보다 크거나 같고, stations + w 보다 작거나 같으면
      idx++; // 해당 지점에는 놓을 수 없으므로 idx를 하나 증가시킨다.
    } else {
      // 범위 밖이라면 해당 지점에 기지국을 설치할 수 있다는 뜻.
      start += w * 2; // start에 w * 2만큼 더해준 후
      answer++; // 필요한 기지국 수를 1 증가시킨다.
    }
    start++; // 해당 지점은 탐색했으니 1 증가시킨다.
  }
  return answer;
};

// 2. 두번째 풀이 (통과)
function solution(n, stations, w) {
  let answer = 0;
  const distance = []; // 거리 정보 저장

  // stations.length >= 2인 경우
  for (let i = 1; i < stations.length; i++) {
    // 11 - 1 - 1 - (4 + 1) = 4
    distance.push(stations[i] - w - 1 - (stations[i - 1] + w));
  }
  // 4 - 1 - 1 = 2
  distance.push(stations[0] - w - 1);
  // 11 - 11 + 1 = 1
  distance.push(n - (stations[stations.length - 1] + w));

  for (let d of distance) {
    if (d <= 0) continue;
    else answer += Math.ceil(d / (2 * w + 1));
  }
  return answer;
}
