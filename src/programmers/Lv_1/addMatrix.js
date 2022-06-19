// 내 풀이
function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        let value = [];
        for(let j = 0; j < arr1[0].length; j++) {
            value.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(value);
    }
    return answer;
}



// 다른 풀이
/*
    어떻게 푼거지? 아직 이해 못했음 
*/
const matrixAddition = (matrix1, matrix2) =>
  matrix1.map((row, y) =>
    row.map((v, x) => v + matrix2[y][x]));

function solution(arr1, arr2) {
    return matrixAddition(arr1, arr2);
}