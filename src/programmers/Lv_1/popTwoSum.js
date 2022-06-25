// 내 풀이
/*
    처음에 for문 범위를 둘다 <=으로 해줘서 계속 빈값이 나왔음

    우선 모든 경우의 수를 구해 answer에 push한 뒤, 중복되는 값을 new Set으로 제거하고 sort함
*/
function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b);
}