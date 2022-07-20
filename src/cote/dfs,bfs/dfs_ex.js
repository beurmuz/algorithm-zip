'use strict';

function dfs(graph, v, visited) {
    visited[v] = 1; // 현재 노드 방문 처리
    console.log(v);

    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for (let x of graph[v]) {
        if(!visited[x]) dfs(graph, x, visited);
    }
}

const graph = [[], // 인덱스 번호를 맞춰주기 위해 빈 값을 넣음
               [2, 3, 8],
               [1, 7],
               [1, 4, 5],
               [3, 5],
               [3, 4],
               [7],
               [2, 6, 8],
               [1, 7]];

let visited = Array.from({length: 9}, () => 0);
console.log(dfs(graph, 1, visited));

// console.log(visited);