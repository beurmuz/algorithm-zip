let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((v) => +v));

const solution = (inputs) => {
  const [N, M] = inputs[0];
  const rangeN = inputs.slice(1, N + 1);
  const rangeM = inputs.slice(N + 1);

  let diffList = [];

  while (true) {
    if (!rangeN.length || !rangeM.length) break;

    let diff = rangeM[0][0] - rangeN[0][0]; // 구간의 길이 차이를 구한다.
    if (diff > 0) {
        // diff가 양수라는 것은 정해진 구간이 임의의 구간보다 길다는 뜻. 
      diffList.push(rangeM[0][1] - rangeN[0][1]); // 속도차를 계산한 후
      rangeN.shift(); // rangeN[0]에 대한 연산은 끝났으므로 제거해준다.
      rangeM[0][0] = diff; // 남은 구간(길이)에 대한 연산이 더 필요하므로 rangeM[0][0]을 diff로 갱신한다. 
    } else if (diff < 0) {
        // diff가 음수라는 것은 임의의 구간이 정해진 구간보다 길다는 뜻.
      diffList.push(rangeM[0][1] - rangeN[0][1]); // 속도차를 계산한 후
      rangeM.shift(); // rangeM[0]에 대한 연산은 끝났으므로 제거해준다.
      rangeN[0][0] = -diff; // 남은 구간(길이)에 대한 연산이 더 필요하므로 rangeN[0][0]을 diff로 갱신한다.
    } else {
        // diff가 0인 경우 => 길이가 딱 맞으므로 추가 연산이 필요없다. 
      diffList.push(rangeM[0][1] - rangeN[0][1]);
      rangeM.shift();
      rangeN.shift();
    }
  }
  // 가장 큰 값을 찾는다. 
  if (Math.max(...diffList) >= 0) {
    return Math.max(...diffList);
  } else {
    // 가장 큰 값이 음수 값이라는건 모든 값들이 음수이며, 제한속도를 넘지 않았다는 뜻이다.
    return 0;
  }
};

console.log(solution(inputs));
