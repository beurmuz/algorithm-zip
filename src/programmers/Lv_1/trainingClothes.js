// 풀이 방법 
/*
    조건을 하나하나 따져 코드를 작성해야 함
    아래의 코드가 최선인듯..?
*/
function solution(n, lost, reserve) {
  let answer = 0;
  let students = Array.from({length: n+2}, () => 1);
  for(let lostStudent of lost) students[lostStudent] -= 1;
  for(let spareStudent of reserve) students[spareStudent] += 1;
  
  for(let i = 1; i <= n; i++) {
      if(students[i] === 0) {
          if(students[i-1] === 2 || students[i+1] === 2) {
              if(students[i-1] === 2) {
                  students[i-1] -= 1;
                  students[i] += 1;            
              } else if(students[i+1] === 2) {
                  students[i+1] -= 1;
                  students[i] += 1;
              }
          }
      }
  }
  for(let x of students) {
      answer += x > 0 ? 1 : 0;
  }
  answer -= 2;
  return answer;
}