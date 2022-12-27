"use strict";

/**
 * 1. 못풀어서 해설봄
 */
function solution(rows, columns, queries) {
  const map = Array.from({ length: rows }, (_, i) => {
    return Array.from({ length: columns }, (__, j) => i * columns + j + 1);
  }); // 행렬 map을 행,열 크기를 반영해서 한번에 구성할 수 있다.
  const answer = [];

  queries.forEach(([sx, sy, tx, ty]) => {
    // 각각 쿼리의 4개 값을 sx, sy, tx, ty로 받는다.
    [sx, sy, tx, ty] = [sx - 1, sy - 1, tx - 1, ty - 1]; // map 행렬이 (0,0)부터 시작하므로 값을 하나씩 빼준다.
    let x = sx,
      y = sy; // 현재 좌표 x, y값을 선언한다.
    let tmp = map[x][y]; // 현재 좌표의 값을 임시변수(tmp)에 둔다.
    let min = Number.MAX_SAFE_INTEGER;
    while (true) {
      min = min > tmp ? tmp : min; // 회전에 의해 이동하는 값이 최소값인지 판단한다.
      if (x === sx && y < ty) {
        // 직사각형 윗변을 이동한다.
        [map[x][y + 1], tmp] = [tmp, map[x][y + 1]];
        y++;
      } else if (y === ty && x < tx) {
        // 직사각형 오른쪽 변을 이동한다.
        [map[x + 1][y], tmp] = [tmp, map[x + 1][y]];
        x++;
      } else if (x === tx && y > sy) {
        // 직사각형 아랫변을 이동한다.
        [map[x][y - 1], tmp] = [tmp, map[x][y - 1]];
        y--;
      } else if (y === sy && x > sx) {
        // 직사각형 왼쪽 변을 이동한다.
        [map[x - 1][y], tmp] = [tmp, map[x - 1][y]];
        x--;
        if (y === sy && x === sx) break; // 왼쪽 변을 이동하면서 원점에 돌아오면 멈춘다.
      }
    }
    answer.push(min);
  });
  return answer;
}

/**
 * 2. 비슷한 풀이
 */

2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
function solution(rows, columns, queries) {
  const a = [...Array(rows)].map((_, r) =>
    [...Array(columns)].map((_, c) => r * columns + c + 1)
  );
  const mins = [];

  queries.map((query) => {
    const [x1, y1, x2, y2] = query.map((_) => _ - 1);
    let min = a[x1][y1],
      tmp = a[x1][y1];

    for (let i = x1; i < x2; i++) {
      a[i][y1] = a[i + 1][y1];
      min = Math.min(min, a[i][y1]);
    }
    for (let i = y1; i < y2; i++) {
      a[x2][i] = a[x2][i + 1];
      min = Math.min(min, a[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      a[i][y2] = a[i - 1][y2];
      min = Math.min(min, a[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      a[x1][i] = a[x1][i - 1];
      min = Math.min(min, a[x1][i]);
    }
    a[x1][y1 + 1] = tmp;

    mins.push(min);
  });

  return mins;
}
