function solution(board, moves) {
  let answer = 0;
  let bucket = [];
  moves.forEach((location) => {
    let nowDoll = 0;
    let i = 0;
    while (i < board.length) {
      if (board[i][location - 1] !== 0) {
        nowDoll = board[i][location - 1];
        board[i][location - 1] = 0;
        break;
      }
      i++;
    }
    if (nowDoll !== 0) {
      if (nowDoll === bucket[bucket.length - 1]) {
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(nowDoll);
      }
    }
  });
  return answer;
}
