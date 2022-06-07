// 내 풀이
function solution(board, moves) {
    let answer = 0;
    let stack = [];

    moves.forEach(pos => {
       for(let i = 0; i < board.length; i++) {
           if(board[i][pos-1] !== 0) { // 빈배열이 아닌 경우에만
               let pickValue = board[i][pos-1];
               board[i][pos-1] = 0;

               if(pickValue === stack[stack.length-1]) {
                   stack.pop();
                   answer += 2; // 사라진 개수
               } else {
                   stack.push(pickValue);
               }
               break; // 반복문이라 이 처리를 해주지 않으면 빙글빙글 돈다
           }
       } 
    });
    return answer;
}


// 다른 풀이 - 행과 열을 바꿔준 후 푼 방법
// https://programmers.co.kr/learn/courses/30/lessons/64061/solution_groups?language=javascript 참고하기
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
