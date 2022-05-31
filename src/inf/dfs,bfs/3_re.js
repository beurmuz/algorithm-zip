'use strict';

function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array());
    let checkArray = Array.from({length: n+1}, () => 0);
    let path = [];

    // 인접리스트 생성
    for(let [a, b] of arr) {
        graph[a].push(b); // a에서 b로 갈 수 있다
    }

    console.log(graph);

    function dfs(v) {
        if(v === n) {
            answer++;
            console.log(path);
        } else {
            for(let i = 0; i <= graph[v].length; i++) {
                if(checkArray[graph[v][i]] === 0) { // graph[v][i]는 이미 방문할 수 있는 노드에 대한 정보가 저장되어 있으므로, checkArray에 대한 값만 확인하면 됨
                    checkArray[graph[v][i]] = 1;
                    // console.log(graph[v][i]);
                    path.push(graph[v][i]);
                    dfs(graph[v][i]); // 정점의 번호 넘기기
                    checkArray[graph[v][i]] = 0;
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
    - 인접리스트로 경로 탐색 문제 풀기
    - n: 정점의 수
    - m: 간선의 수

    - 이미 방문한 노드는 반드시 체크를 걸어주어야 함
    - dfs의 종료지점은 v === 5인순간

    - 인접리스트는 인접배열로 푸는 방법과 달리 Array를 선언할 때 [[], [], [], ...] 이렇게 선언해주어야 함
        - 갈 수 있는 경로 자체를 push하기 때문
    - 경로 탐색 시 정점의 길이(graph[v].length) 만큼만 방문하면 됨
*/