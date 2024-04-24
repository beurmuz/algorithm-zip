// [시뮬레이션, 구현]

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [N, M] = inputs[0].split(" ").map((v) => +v);
  const power = [0, ...inputs[1].split(" ").map((v) => +v)];
  const checked = Array.from({ length: N + 1 }, (_, idx) =>
    idx === 0 ? 0 : 1
  );

  for (let i = 2; i < inputs.length; i++) {
    let [A, B] = inputs[i].split(" ").map((v) => +v);

    if (power[A] > power[B]) {
      checked[B] = 0;
    } else if (power[A] < power[B]) {
      checked[A] = 0;
    } else {
      // 둘다 같다면
      checked[A] = 0;
      checked[B] = 0;
    }
  }
  return checked.reduce((acc, v) => (acc += v));
};

console.log(solution(inputs));
