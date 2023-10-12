function solution(s) {
  return s
    .split(" ")
    .map((words) =>
      words
        .split("")
        .map((word, idx) => {
          if (idx % 2 === 0) return word.toUpperCase();
          else return word.toLowerCase();
        })
        .join("")
    )
    .join(" ");
}
