/**
 * [정렬, 구현, 시간]
 * 기존의 [HH:MM] 시간 정보를 [HH *  60 + MM]으로 바꾼 후, 3번째 값을 추가해 방문 여부를 나타냈다.
 */

const solution = (book_time) => {
  let answer = 0;

  // 시간을 분으로 바꾸는 함수
  const getTime = (times) => {
    let [start, end] = times.split(":");
    return start * 1 * 60 + end * 1;
  };

  // 1. 시간을 분으로 전부 바꾼 후 입실시간 기준으로 오름차순 정렬한다.
  for (let i = 0; i < book_time.length; i++) {
    book_time[i] = [getTime(book_time[i][0]), getTime(book_time[i][1]), 0];
  }
  book_time.sort((a, b) => a[0] - b[0]);

  // 2. 방 개수 세기
  for (let i = 0; i < book_time.length - 1; i++) {
    if (book_time[i][2] === 1) continue;

    book_time[i][2] = 1; // 방문 표시
    let cleanUpTime = book_time[i][1] + 10;

    for (let j = i + 1; j < book_time.length; j++) {
      if (book_time[j][2] === 1) continue;

      if (cleanUpTime <= book_time[j][0]) {
        cleanUpTime = book_time[j][1] + 10;
        book_time[j][2] = 1;
      }
    }
    answer++;
  }
  return book_time[book_time.length - 1][2] === 0 ? answer + 1 : answer; // 아직 방문되지 않은 방이 있다면, 해당 방의 개수를 추가해서 return 한다.
};
