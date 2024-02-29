/**
 * [dfs, 백트래킹, 정규표현식, Set]
 * - 카카오 문제는 정규표현식으로 풀면 정말 쉬워진다. 그치만 나는 잘 못하지 우하하
 * - 포인트는 항상 banned_id개수만큼 불량 사용자 케이스를 카운트해야한다는 것이다.
 *    - 이를 위해 백트래킹을 이용해서 처음부터 쭉쭉 순회하며 가능한 모든 짝을 찾으면 된다.
 *    - ✅ 백트래킹은 방문 여부를 표시할 배열이 필요하다.
 */

function solution(user_id, banned_id) {
  // 정규표현식으로 제재아이디에 해당하는 id 찾기
  const selected = Array.from({ length: user_id.length }, () => false); // 방문여부 체크
  // *을 .으로 바꾼 각각의 정규 표현식을 생성한다.
  const regex = banned_id.map(
    (id) => new RegExp(`^${id.replaceAll("*", ".")}$`)
  );

  // dfs
  const set = new Set();
  const dfs = (idx = 0, arr = []) => {
    if (idx === banned_id.length) {
      set.add(arr.sort().join(",")); // 정렬 후 두 아이디를 ,으로 연결해서 저장한다. set이 알아서 중복을 제거해준다.
    } else {
      for (let i = 0; i < user_id.length; i++) {
        if (selected[i]) continue; // 이미 방문한 경우 넘어간다.
        if (user_id[i].match(regex[idx])) {
          // true일 경우 banned_id라는 것.
          selected[i] = true; // 선택 표시
          dfs(idx + 1, [...arr, user_id[i]]);
          selected[i] = false; // 선택 취소 표시
        }
      }
    }
  };
  dfs();
  return set.size;
}
