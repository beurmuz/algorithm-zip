function solution(user_id, banned_id) {
  const checked = Array.from({ length: banned_id.length }, () => false);
  const regex = banned_id.map(
    (id) => new RegExp(`^${id.replaceAll("*", ".")}$`)
  );

  const set = new Set();
  const dfs = (idx = 0, arr = []) => {
    if (idx === banned_id.length) {
      set.add(arr.sort().join(","));
    } else {
      for (let i = 0; i < user_id.length; i++) {
        if (checked[i]) continue;
        if (user_id[i].match(regex[idx])) {
          checked[i] = true;
          dfs(idx + 1, [...arr, user_id[i]]);
          checked[i] = false;
        }
      }
    }
  };
  dfs();
  // console.log(set)
  return set.size;
}
