function solution(scores) {
  const sortedScores = scores
    .map((score, index) => [...score, index])
    .sort((a, b) => {
      if (a[0] !== b[0]) return b[0] - a[0];
      return a[1] - b[1];
    });

  let max = -1;
  const filteredScores = [];

  for (const score of sortedScores) {
    const [layer, value, index] = score;
    max = Math.max(value, max);

    if (value >= max) {
      filteredScores.push({
        value: layer + value,
        isTarget: index === 0,
      });
    }
  }

  const result = filteredScores.sort((a, b) => b.value - a.value);

  let count = 1;
  let beforeValue = null;
  let acc = 0;

  for (const el of result) {
    if (el.value === beforeValue) acc += 1;
    else {
      count += acc;
      acc = 1;
    }

    if (el.isTarget) return count;

    beforeValue = el.value;
  }

  return -1;
}
