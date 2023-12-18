const solution = (k, ranges) => {
  let graph = [];
  let area = [0]; // 넓이를 저장

  while (k !== 1) {
    if (k % 2) {
      // 각 구간의 넓이는 사다리꼴의 넓이 (윗변+아랫변)/2, ([idx+1]+[idx])/2
      area.push((k + k * 3 + 1) / 2 + area.flat(-1));
      k = k * 3 + 1;
    } else {
      area.push((k + k / 2) / 2 + area.at(-1));
      k /= 2;
    }
  }

  return ranges.map(([s, e]) => {
    if (area.length - 1 + e < s) return -1;
    return area.at(e - 1) - area[s];
  });
};
