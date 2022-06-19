// 내 풀이
/*
    완전탐색이랑 dfs랑 순간 같은거로 착각해서 풀고있었다.. 어쩐지 dfs로 못풀겠어서 다시 문제를 읽어보니 완전탐색이었다!
    for문에서 입력 값에 따라 맞춘 문제 수를 세주는 함수를 만들었었다가, 함수를 만들어 반복문 내에서 또 반복문을 돌리는 건 좋지 않은 것 같아 if문으로 변경하였다.
*/
function solution(answers) {
    let answer = [];
    let pattern1 = [1, 2, 3, 4, 5];
    let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let countScore = Array.from({length: 3}, () => 0);
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === pattern1[i % pattern1.length]) countScore[0] += 1;
        if(answers[i] === pattern2[i % pattern2.length]) countScore[1] += 1;
        if(answers[i] === pattern3[i % pattern3.length]) countScore[2] += 1;
    }
    
    const winner = Math.max(...countScore);
    for(let i = 0; i < 3; i++) {
        if(countScore[i] === winner) answer.push(i+1);
    }
    return answer;
}
