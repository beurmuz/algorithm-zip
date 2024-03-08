function solution(data, col, row_begin, row_end) {
  var answer = "";
  data.sort((a, b) => {
    if (a[col - 1] !== b[col - 1]) {
      return a[col - 1] - b[col - 1];
    }
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    }
  });

  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    const res = data[i].reduce((acc, val) => acc + (val % (i + 1)), 0);
    answer = answer !== "" ? answer ^ res : answer;
  }

  return answer;
}
