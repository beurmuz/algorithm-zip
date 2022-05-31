'use strict';

function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let checkArray = Array.from({length: n+1}, () => 0);
    let path = [];

    // 인접행렬 생성
    for(let [a, b] of arr) {
        graph[a][b] = 1;
    }

    function dfs(v) {
        if(v === n) {
            answer++;
            console.log(path);
        } else {
            for(let i = 1; i <= n; i++) {
                if(graph[v][i] === 1 && checkArray[i] === 0) { // v에서 i로 갈 수 있고, checkArray[i]가 0이면(아직 방문하지 않았다면)
                    checkArray[i] = 1;
                    path.push(i);
                    dfs(i);
                    checkArray[i] = 0;
                    path.pop();
                }
            }
        }
    }
    checkArray[1] = 1;
    path.push(1);
    dfs(1);
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));

/*
    - 인접행렬로 경로 탐색 문제 풀기
    - n: 정점의 수
    - m: 간선의 수

    - 이미 방문한 노드는 반드시 체크를 걸어주어야 함

    - dfs의 종료지점은 v === 5인순간!
*/