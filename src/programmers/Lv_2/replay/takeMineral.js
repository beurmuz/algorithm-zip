function solution(picks, minerals) {
  // 광물을 자를 때 쓰일 최소한의 곡괭이 수 => 1개의 곡괭이는 5개의 광물을 캐므로 / 5 해주기
  let canCutPicks = Math.ceil(minerals.length / 5);

  // 곡괭이의 총 개수
  let picksSum = picks.reduce((acc, cur) => acc + cur, 0);

  // 곡괭이의 개수가 0개라면 캘 수 있는 피로도는 0이다.
  if (picksSum === 0) return 0;

  // 곡괭이의 총 개수로 캘 수 있는 광물만 남긴다.
  minerals = minerals.slice(0, picksSum * 5);

  let arr = [];
  for (let i = 0; i < canCutPicks; i++) {
    let m = { diamond: 0, iron: 0, stone: 0 };

    // 한 곡괭이 당 5개씩 자를 수 있으므로, miinerals 배열을 앞에서부터 5개씩 끊어내어 광물의 갯수를 센다.
    minerals.splice(0, 5).map((v) => m[v]++);

    // 여기가 핵심! 각각의 곡괭이로 m에 해당하는 광물들을 캐봤다고 가정한다.
    // 3개씩 끊어서 다이아몬드로 캔 경우(1이니까 그대로 작성), 철로 캔 경우(*5, *1, *1), 돌로 캔 경우(*25, *5, *1)
    // arr에는 각각의 광물로 캔 경우의 합을 구해서 push한다.
    arr.push([
      m.diamond + m.iron + m.stone,
      m.diamond * 5 + m.iron + m.stone,
      m.diamond * 25 + m.iron * 5 + m.stone,
    ]);
  }

  // stone 곡괭이로 캤을 때 가장 큰값이 앞에 오도록 내림차순으로 정렬 후
  // 배열을 순회 하면서 stone 곡괭이로 캤을 때 가장 큰값은 다이아가 많다는 뜻이므로
  // 다이아 곡괭이(picks[0])를 먼저 사용 후, 다이아 곡괭이가 없다면 철 곡괭이(picks[1])를 사용하고, 철 곡괭이도 없다면 돌 곡괭이 사용한다.
  arr = arr.sort((a, b) => b[2] - a[2]);

  let answer = 0; // 총 피로도
  for (let i = 0; i < picks.length; i++) {
    // 다이아몬드, 철, 돌 곡괭이 순서로 순회한다.
    let pickCount = picks[i]; // i 곡괭이의 개수는 pickCount만큼 있다.

    // console.log(`현재 picks_${i}의 개수는${pickCount}`);

    while (pickCount--) {
      if (arr.length === 0) return answer;
      answer += arr.shift()[i]; // arr의 맨 앞 배열을 똑 떼서 [i]번째 값(i번째 곡괭이를 썼기 때문)만큼 ㅁnswer에 더해준다.
      // console.log(answer)
    }
  }

  return answer;
}
