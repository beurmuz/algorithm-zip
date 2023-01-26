let N = 210;

let count = 0;

for (let i = 1; i <= N; i++) {
  let nArr = String(i);
  if (i < 100) {
    count++;
    continue;
  }
  console.log(`nArr: ${nArr}, [0]: ${nArr[0]}, [1]: ${nArr[1]}, [2]: ${nArr[2]}`)
  let A = Number(nArr[0]) - Number(nArr[1]);
  let B = Number(nArr[1]) - Number(nArr[2]);
  if (A === B) {
    count++;
    console.log(`A===B인 경우: ${A}, ${B} /// count: ${count}`);
  }
}

console.log(count);