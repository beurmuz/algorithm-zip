function solution(n) {
  let arr = Array.from({ length: n + 1 }, () => true);

  for (let i = 2; i < n + 1; i++) {
    //소수인지 아닌지 검사
    if (arr[i] === false) continue; // 소수가 아니라면 건너뛴다.

    for (let k = i * 2; k <= n; k += i) {
      arr[k] = false; // 소수에 *2씩 늘려가는 것은 소수가 아니므로 false로 빠르게 없앤다.
    }
  }
  return arr.filter((value) => value).length - 2; // 0, 1제외
}
