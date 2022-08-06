'use strict';

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../1012.txt';
let [testCase, ...inputs] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let graph, visited, M, N ,K ,cnt, p = 0;
for(let i = 0; i < inputs.length; i++) {
    inputs[i] = inputs[i].split(' ').map((e)=>+e);
}

for(let i = 0; i < testCase; i++) { // testCase 수만큼 반복
    [M, N, K] = inputs[p];
    graph = Array.from(Array(M), () => new Array(N).fill(0)); // 배추지도
    visited = Array.from(Array(M), () => new Array(N).fill(0)); // 방문 여부를 체크할 map
    answer = 0;
    let temp = p; 
    for(p = p+1; p <= K + temp; p++) {
        let [x, y] = inputs[p]
        graph[x][y] = 1 // 배추가 심어진 곳에 1 저장
    }
    
    // 벌레 개수 세기 
    for(let j = 0; j < M; j++){
        for(let k = 0; k < N; k++){
            if(graph[j][k] === 1 && visited[j][k]===0) { // 배추가 심어져있고, 아직 방문하지 않았다면
                dfs(j,k);
                answer ++
            }
        }
    }
    console.log(answer); // 벌레 개수 출력
}

function dfs(x, y) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    visited[x][y] = 1;
    
    for(let i = 0; i < 4; i++) { // 4방향 탐색
        let nx = x + dx[i];
        let ny = y + dy[i];
        
        if(nx >= 0 && nx < M && ny >= 0 && ny < N) {
            if(visited[nx][ny] === 0 && graph[nx][ny] === 1) {
                dfs(nx, ny);
            }
        }
    }
}