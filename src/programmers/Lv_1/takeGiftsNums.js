/**
 * [구현]
 * - 서로 주고받은 선물 수를 기록하려면 N * N의 2차원 배열이 필요하다. 해당 문제의 N(= frineds 수)은 50이므로 완전탐색이 가능하다.
 * - 헷갈릴 수 있으나 다음달에 받을 선물의 개수를 셀 때, 선물 지수가 선물 횟수가 작은 사람 것을 빼앗아서 주는게 아니다.
 */

function solution(friends, gifts) {
  // 이름과 인덱스 번호 매칭 Map
  const N = friends.length;
  const nameIndexMap = new Map();
  for (let i = 0; i < N; i++) {
    nameIndexMap.set(friends[i], i);
  }

  // 주고받은 선물 내역을 기록할 grid 선언
  const giftsGrid = Array.from({ length: N }, () => Array(N).fill(0));

  // 선물 지수 계산
  const giftsRatio = Array.from({ length: N }, () => 0);

  // 다음 달 선물 예정
  const nextMonth = Array.from({ length: N }, () => 0);

  // 1. 선물 주고받은 횟수 카운트하기
  for (let i = 0; i < gifts.length; i++) {
    let [from, to] = gifts[i].split(" ");
    giftsGrid[nameIndexMap.get(from)][nameIndexMap.get(to)] += 1;
  }

  // 2. 선물 지수 계산하기
  for (let i = 0; i < N; i++) {
    // 총 선물한 수 세기 (가로)
    giftsRatio[i] = giftsGrid[i].reduce((acc, current) => (acc += current), 0);

    // 선물 받은 수 빼기 (세로)
    for (let j = 0; j < N; j++) {
      giftsRatio[i] -= giftsGrid[j][i];
    }
  }

  // 3. 다음달에 받을 선물 수 카운팅
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      // j가 0부터 시작할 경우, 중복이 발생한다.
      if (i === j) continue; // 자기 자신인 경우는 pass

      // 더 많이 선물한 사람이 다음달에 선물 하나를 받음
      if (giftsGrid[i][j] > giftsGrid[j][i]) nextMonth[i]++;
      if (giftsGrid[i][j] < giftsGrid[j][i]) nextMonth[j]++;

      // 선물을 주고 받은 기록이 없거나 같은 경우
      if (giftsGrid[i][j] === giftsGrid[j][i]) {
        if (giftsRatio[i] > giftsRatio[j]) nextMonth[i]++;
        if (giftsRatio[i] < giftsRatio[j]) nextMonth[j]++;
      }
    }
  }

  return Math.max(...nextMonth);
}
