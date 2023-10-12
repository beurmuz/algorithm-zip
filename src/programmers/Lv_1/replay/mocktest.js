function solution(answers) {
  let scores = [0, 0, 0];
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((q, idx) => {
    if (q === p1[idx % p1.length]) scores[0]++;
    if (q === p2[idx % p2.length]) scores[1]++;
    if (q === p3[idx % p3.length]) scores[2]++;
  });

  let maxScore = Math.max(...scores);
  let answer = [];

  for (let i = 0; i < 3; i++) {
    if (scores[i] === maxScore) answer.push(i + 1);
  }
  return answer;
}
