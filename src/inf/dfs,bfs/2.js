'use strict';

function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let checkArray = Array.from({length:n+1}, () => 0);
    let path = [];

    // 인접행렬 만들기
    for(let [a, b] of arr) {
        graph[a][b] = 1; // 방향그래프
    }

    function dfs(v) {
        if(v===n) {
            answer++;
            console.log(path);
        }
        else {
            for(let i = 1; i <= n; i++) {
                if(graph[v][i] === 1 && checkArray[i] === 0) { // v에서 i로 갈 수 있는가? 가려고하는 정점에 아직 방문하지 않았는가?
                    checkArray[i] = 1;
                    path.push(i);
                    dfs(i); // v에서 i로 간거니까 i 정점을 넘겨줘야 함
                    checkArray[i] = 0; // back할때에는 check를 풀어줘야 함
                    path.pop();
                }
            }
        }
    }
    path.push(1);
    checkArray[1] = 1; // 이 작업을 하지 않으면 1에 재방문하는 문제가 생김
    dfs(1);
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));