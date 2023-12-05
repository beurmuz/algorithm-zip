/**
 * [투포인터]
 * - 시작점과 끝점을 조절해가며 정답을 구할 수 있다고 생각해 풀이 방법으로 투포인터를 생각해냈다.
 */

// lt === rt 인 구간을 잡아내지 못하는 풀이 (오답)
const solution = (sequence, k) => {
  let [lt, rt] = [0, 0];
  let result = [0, 0];
  let minLength = sequence.length;
  let sum = 0;

  while (lt <= rt && rt < sequence.length) {
    if (sum < k) {
      sum += sequence[rt];
      rt++;
    } else if (sum > k) {
      sum -= sequence[lt];
      lt++;
    }

    if (sum === k) {
      if (minLength > rt - 1 - lt) {
        minLength = rt - 1 - lt;
        result = [lt, rt - 1];
      }
      lt++;
      sum -= sequence[lt];
    }
  }
  return result;
};

// 다시 푼 풀이 (정답)
const solution = (sequence, k) => {
  let sum = 0;
  let lt = 0;
  let result = [0, 0];
  let minLength = sequence.length;

  for (let rt = 0; rt < sequence.length; rt++) {
    // for문을 이용해서 rt값을 조절하고
    sum += sequence[rt];
    if (sum > k) {
      while (sum > k) {
        // while문을 이용해서 lt값을 조절한다.
        sum -= sequence[lt++];
      }
    }
    if (sum === k) {
      if (minLength > rt - lt) {
        // sum === k인 경우, minLength를 구해서 답을 갱신한다.
        minLength = rt - lt;
        result = [lt, rt];
      }
    }
  }
  return result;
};
