'use strict';

/*
    풀이 방법 생각해보기
*/
function solution(m, n, board) {
    let graph = Array.from({length: n}, () => []);
    board.forEach((line, i) => {
        for (let j = 0; j < n; j++) {
            graph[j].push(line[j]);
        }
    });
    const dx = [1, 0, 1];
    const dy = [0, 1, 1];
    while (fullSearch()) {
        graph = graph.map((row) => {
            row.sort((a, b) => {
                if (a === "-") return -1;
                else return 1;
            });
            return row;
        });
    }
    return graph.flatMap(v => v).filter(v => v === "-").length;

    function fullSearch() {
        let isChanged = false;
        const explodes = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < graph[i].length; j++) {
                if (graph[i][j] === "-") continue;
                const [x, y] = [i, j];
                const blocks = [];
                for (let k = 0; k < 3; k++) {
                    const nx = x + dx[k];
                    const ny = y + dy[k];
                    if (nx < n && ny < m) {
                        if (graph[x][y] === graph[nx][ny]) blocks.push([nx, ny]);
                        else break;
                    } else break;
                }
                if (blocks.length === 3) {
                    explodes.push([x, y]);
                    explodes.push(...blocks);
                }
            }
        }
        if (explodes.length >= 4) {
            isChanged = true;
            explodes.forEach(v => {
                const [x, y] = v;
                graph[x][y] = "-";
            });
        }
        return isChanged;
    }
}