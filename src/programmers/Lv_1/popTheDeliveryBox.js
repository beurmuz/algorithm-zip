/**
 * 구현 문제!
 * 다만 정확성 30/100 나온 코드.. ㅎ
 */
// 틀린 코드 
function solution(n, w, num) {
  let h = Math.ceil(n / w);
  const board = Array.from({ length: h }, () => Array(w).fill(0));

  // 1. 왼 -> 오, 오 <- 왼 반복해서 board 채우기
  let dir = 0;
  let number = 1;
  let [r, c] = [0, 0];
  for (let i = h - 1; i >= 0; i--) {
    if (dir === 0) {
      for (let j = 0; j < w; j++) {
        if (number === n + 1) break;
        board[i][j] = number;
        if (board[i][j] === num) [r, c] = [i, j];
        number++;
      }
    } else if (dir === 1) {
      for (let j = w - 1; j >= 0; j--) {
        if (number === n + 1) break;
        board[i][j] = number;
        if (board[i][j] === num) [r, c] = [i, j];
        number++;
      }
    }
    if (number === n + 1) break;
    if (dir) dir = 0;
    else dir = 1;
  }

  // 2. 특정 값이 포함된 라인을 찾아 pop 개수 세기
  function cutLine(r, c) {
    let arr = Array(h).fill(0);
    let answer = 0;

    for (let i = h - 1; i >= 0; i--) {
      arr[i] = board[i][c];
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        answer = i + 1;
        break;
      }
    }
    return answer;
  }
  return cutLine(r, c);
}

// ✅ 사실 수학으로 쉽고 간단하게 해결할 수 있다..