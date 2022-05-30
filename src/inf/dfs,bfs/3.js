'use strict';

function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array());
    let checkArray = Array.from({length:n+1}, () => 0);
    let path = [];

    // 인접리스트 만들기
    for(let [a, b] of arr) {
        graph[a].push(b);
    }
    console.log(graph);

    function dfs(v) {
        if(v===n) {
            answer++;
            console.log(path);
        }
        else {
            for(let i = 0; i < graph[v].length; i++) {
                // console.log(checkArray[graph[v][i]]); // 2, 3, 4
                if(checkArray[graph[v][i]] === 0) { // graph[v][i]는 v정점에서 갈 수 있는 정점 번호
                    checkArray[graph[v][i]] = 1;
                    path.push(graph[v][i]);
                    dfs(graph[v][i]); // 정점 번호를 넘겨야함
                    checkArray[graph[v][i]] = 0;
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