/**
 * [구현, 시뮬레이션]
 * - 게임 캐릭터는 x, y 모두 -5 ~ 5 사이의 공간을 걸어다닌다.
 * - 중요한건 '칸'을 세는게 아니라 '경로'를 세는거라, '현재-다음', '다음-현재'를 함께 기록해서 중복을 찾아내야한다.
 */

function solution(dirs) {
  const pos = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  let now = [0, 0];
  const visited = new Set(); // 처음 가는 경로만 저장해야하니, 자동으로 중복이 제외될 수 있도록 한다.

  for (let dir of dirs) {
    // pos[dir] 가져오기
    let nx = now[0] + pos[dir][0];
    let ny = now[1] + pos[dir][1];

    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
    visited.add(`${now[0]}${now[1]},${nx}${ny}`);
    visited.add(`${nx}${ny},${now[0]}${now[1]}`);

    now = [nx, ny];
  }
  return visited.size / 2;
}
