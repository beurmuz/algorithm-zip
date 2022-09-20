'use strict';

/*
    와앙 어렵다
*/
function solution(m, n, board) {
    let graph = Array.from({length: n}, () => []);
    
    // graph 생성
    board.forEach((line, i) => {
        for (let j = 0; j < n; j++) {
            graph[j].push(line[j]);
        }
    });
    
    // 첫번째 칸(0,0) 기준으로 오른쪽(0,1), 아래(1,0), 오른쪽가고 아래로(1,1) 
    const dx = [1, 0, 1];  
    const dy = [0, 1, 1];
    
    // fullSearch()가 true인 동안(삭제할 게 있는 동안)만 반복
    while (fullSearch()) {
        // 그래프 정렬 (남은 값들을 아래로 당기고, '-'는 뒤로 보내기)
        graph = graph.map((row) => { // 한 줄씩
            row.sort((a, b) => {
                if (a === "-") return -1; // '-'를 뒤로 보내기
                else return 1; // '-'가 아니면 그대로 놔두기
            });
            return row;
        });
        // console.log(graph);
    }
    return graph.flatMap(v => v).filter(v => v === "-").length;

    function fullSearch() {
        let isChanged = false;
        const explodes = []; // 삭제되는 칸들
        for (let i = 0; i < n; i++) { // row 개수
            for (let j = 0; j < graph[i].length; j++) { // column 개수
                if (graph[i][j] === "-") continue; // 이미 지운 값이면 건너뛰기
                const [x, y] = [i, j];
                const blocks = [];
                for (let k = 0; k < 3; k++) {
                    const nx = x + dx[k];
                    const ny = y + dy[k];
                    if (nx < n && ny < m) { // 범위 내에 있고
                        if (graph[x][y] === graph[nx][ny]) blocks.push([nx, ny]); // 같은 블럭을 blocks에 추가
                        else break;
                    } else break;
                }
                if (blocks.length === 3) {
                    explodes.push([x, y]); // 기준 값 넣고
                    explodes.push(...blocks); // blocks에 넣은 것들 다 넣기
                }
            }
        }
        
        // 지울 블록들이 4개 이상이면 
        if (explodes.length >= 4) {
            isChanged = true;
            explodes.forEach(v => { // explodes에 있는 인덱스 번호에 따라 graph의 값을 전부 '-'로 바꾸기
                const [x, y] = v;
                graph[x][y] = "-";
            });
        }
        // console.log(graph);
        return isChanged;
    }
}