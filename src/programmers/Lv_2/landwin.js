'use strict';

/*
    처음 풀이
    - 놀랍게도 샘플 테스트는 통과했으나, 정확성과 효율성이 0이 나왔다. 와우
*/
function solution(land) {
    let answer = 0;
    let beforeLocation = -1;
    
    land.forEach((row) => {
        let tmp = [...row];
        tmp.sort((a, b) => b-a);
        if(beforeLocation === row.indexOf(tmp[0])) {
            beforeLocation = row.indexOf(tmp[1]);
            answer += tmp[1];
        } else {
            beforeLocation =row.indexOf(tmp[0]);
            answer += tmp[0];
        }
    });
    
    return answer;
}


/*
    답안 찾아보기
    - 맨 처음 배열의 최대값을 구해서 시작하는 게 아니라 결과적으로 총합이 최대가 되어야하므로 해당 문제는 DP로 풀어야한다. (풀이 참고: https://onlydev.tistory.com/71)
*/
function solution(land) {
    let len = land.length;
    
    for(let i = len - 2; i >= 0; i--){
          land[i][0] = Math.max(land[i+1][1], land[i+1][2], land[i+1][3])+land[i][0];
          land[i][1] = Math.max(land[i+1][0], land[i+1][2], land[i+1][3])+land[i][1];
          land[i][2] = Math.max(land[i+1][0], land[i+1][1], land[i+1][3])+land[i][2];
          land[i][3] = Math.max(land[i+1][0], land[i+1][1], land[i+1][2])+land[i][3];
      }
      return Math.max(...land[0]);
}


// 또 다른 풀이
function solution(land) {
    for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
      for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
        land[rowIndex][colIndex] += Math.max(
          ...land[rowIndex - 1].slice(0, colIndex), 
          ...land[rowIndex - 1].slice(colIndex + 1))
      }
    }
    return Math.max(...land[land.length - 1])
}