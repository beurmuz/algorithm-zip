// 풀이 방법 
/*
    조건을 하나하나 따져 코드를 작성해야 함
    아래의 코드가 최선인듯..?
*/
function solution(n, lost, reserve) {
    let answer = 0;
    let studentClothes = new Array(n + 2).fill(1);
    for (const student of reserve) studentClothes[student] += 1;
    for (const student of lost) studentClothes[student] -= 1;
    for (let i = 1; i < n + 1; i++) {
      if (studentClothes[i] === 0) {
        if (studentClothes[i - 1] === 2 || studentClothes[i + 1] === 2) {
          if (studentClothes[i - 1] === 2) {
            studentClothes[i - 1] -= 1;
            studentClothes[i] += 1;
          } else {
            studentClothes[i + 1] -= 1;
            studentClothes[i] += 1;
          }
        }
      }
    }
    for (const student of studentClothes) {
      answer += student > 0 ? 1 : 0;
    }
    answer -= 2;
    return answer;
  }