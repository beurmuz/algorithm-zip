'use strict';

function bfs(graph, start, visited, queue) {
    queue.push(start);
    visited[start] = 1; // 현재 노드 방문처리

    // 큐가 빌 때까지
    while (queue.length) {
        let v = queue.shift(); // 맨 앞 원소 빼기
        console.log(v);
        // console.log(graph[v]);
        // 아직 방문하지 않은 원소들을 큐에 삽입
        for (let x of graph[v]) {
            if(visited[x] === 0) {
                queue.push(x);
                visited[x] = 1; // 큐에 넣고 방문 처리
            }
        }
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
let queue = [];

console.log(bfs(graph, 1, visited, queue));