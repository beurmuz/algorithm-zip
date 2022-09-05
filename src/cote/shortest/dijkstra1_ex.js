'use strict';

function dijkstra(n, m , input) {
    let graph = Array.from({ length: n+1 }, () => []); // 각 노드에 대한 정보를 담는 배열
    let visited = Array.from({ length: n+1 }, () => false); // 방문 여부를 체크하는 배열
    let distance = Array.from({ length: n+1 }, () => Number.MAX_SAFE_INTEGER);
    let start = input.shift()*1;
    
    // 모든 간선 정보 입력받기
    for (let line of input) {
        graph[line[0]].push([line[1], line[2]]);
    }

    // 시작점 방문처리 
    distance[start] = 0
    visited[start] = true;

    for(let i = 1; i < graph.length; i++) {
        console.log(i, graph[i]);
        let now = getSmallValue(graph[i], distance, visited);
        visited[now] = true;
        // console.log(visited);

    }
}

// 최단 거리 구하기
function getSmallValue (graph, distance, visited) {
    let minValue = Number.MAX_SAFE_INTEGER;
    let index = 0;

    for(let i = 0; i < graph.length; i++) {
        if(graph[i][1] < minValue && !visited[i]) {
            minValue = graph[i][1];
            index = i;
        }
    }
    return index;
}


let n = 6;
let m = 11;
let input = [[1],
                [1, 2, 2],
                [1, 3, 5],
                [1, 4, 1],
                [2, 3, 3],
                [2, 4, 2],
                [3, 2, 3],
                [3, 6, 4],
                [4, 3, 3],
                [4, 5, 1],
                [5, 3, 1],
                [5, 6, 2]];

console.log(dijkstra(n, m, input));