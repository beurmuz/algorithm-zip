'use strict';

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = input.shift()*1;
let graph, visited, m, n, k, count, p = 0;

// 문자 input -> 숫자 input
for(let i = 0; i < input.length; i++) {
    input[i] = input[i].split(' ').map((v) => +v);
}

// testcase수만큼 반복문 돌기
for(let t = 0; t < T; t++) {
    [m, n, k] = input[p];
    // console.log(m, n, k);
    graph = Array.from(Array(m), () => Array(n).fill(0)); // 배추 지도
    visited = Array.from(Array(m), () => Array(n).fill(0)); // 방문 여부를 체크할 map
    answer = 0;
    let tmp = p; // 현재 p의 값을 tmp에 저장
    
    // 배추 심기
    for(p = p+1; p <= k+tmp; p++) {
        let [x, y] = input[p];
        graph[x][y] = 1; 
    }
    
    // m x n의 배추 지도에서 벌레 개수 세기
    for(let x = 0; x < m; x++) {
        for(let y = 0; y < n; y++) {
            if(graph[x][y] === 1 && visited[x][y] === 0) { // 배추가 있고, 아직 탐색하지 않았다면 
                dfs(x, y);
                answer++;
            }
        }
    }
    console.log(answer);
}

function dfs(x, y) {
    visited[x][y] = 1; // 방문처리
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    
    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        
        if(nx >= 0 && ny >= 0 && nx < m && ny < n) {
            if(visited[nx][ny] === 0 && graph[nx][ny] === 1) {
                dfs(nx, ny);
            }
        }
    }
}

