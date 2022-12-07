"use strict";

// 1. 처음에 푼 풀이 (테케 10, 11 시간초과 발생)
/*
    - 정확성 (81.8 / 100.0)
    - padStart로 자릿수 맞춰서 비교함
*/
// function solution(numbers) {
//   let answer = numbers.map((now) => {
//     let nowBit = now.toString(2);
//     let nextNum = now + 1;
//     let i = 0;
//     while (1) {
//       let nextBit = nextNum.toString(2);
//       let diffCount = 0;

//       // nowBit와 nextBit 길이 맞추기
//       if (nowBit.length >= nextBit.length)
//         nextBit = nextBit.padStart(nowBit.length, "0");
//       else nowBit = nowBit.padStart(nextBit.length, "0");

//       // nowBit와 nextBit 자릿수 비교
//       for (let i = 0; i < nowBit.length; i++) {
//         if (diffCount > 2) break;
//         if (nowBit[i] !== nextBit[i]) diffCount++;
//       }
//       if (diffCount <= 2) return nextNum;
//       nextNum = Number(nextNum) + 1;
//       i++;
//     }
//   });
//   return answer;
// }

console.log(solution([2, 15]));

// 2. 다른 풀이 참고 🔥 심지어 엄청 빠르다!
/*
    - padStart를 이용하지 않고 숫자의 홀, 짝 성질을 이용함
        - 짝수: 이진수로 변환하면 무조건 마지막 자릿수가 0이기 때문에 마지막 자리만 1로 바꿔주면 되므로 +1 하기
        - 홀수: 이진수로 변환 후 0이 처음 나오는 자릿수 찾기.
            - 0이 처음 나오는 순간 그 전 자릿수는 1이 확실하므로, 01을 제거하고 10을 넣어 해당 이진수를 숫자로 변환한 후 answer에 더하기 
*/
function solution(numbers) {
  let answer = [];
  numbers.forEach((now) => {
    if (now % 2 === 0) {
      // 짝수일 때
      answer.push(now + 1); // 정답은 무조건 now + 1;
    } else {
      // 홀수일 때
      now = "0" + now.toString(2); // 맨 앞에 0 붙여주고 시작
      //   console.log(`현재값은 ${parseInt(now, 2)}, bit 표기시 ${now}`);
      let totalLength = now.length;
      for (let i = totalLength - 1; i >= 0; i--) {
        // 맨 뒤부터 탐색
        if (+now[i] === 0) {
          // 0이 처음 나오는 자릿수를 찾기
          answer.push(
            parseInt(
              now.substring(0, i) + "10" + now.substring(i + 2, totalLength),
              2
            ) // 01을 제거하고 10을 넣어 해당 이진수를 숫자로 변환
          );
          //   console.log(`0부터 ${i}까지 잘라내면: ${now.substring(0, i)}`);
          //   console.log(`여기에 +'10'을 하면: ${now.substring(0, i)}10`);
          //   console.log(
          //     `여기에 ${i}부터 한자리를 자르면: ${now.substring(
          //       i + 2,
          //       totalLength
          //     )}`
          //   );
          //   console.log(
          //     `최종적으로 1글자를 뒤에 붙여주면: ${
          //       now.substring(0, i) + "10" + now.substring(i + 2, totalLength)
          //     }`
          //   );
          break;
        }
      }
    }
  });

  return answer;
}

// 3. 더 간단한 풀이법 (2번이랑 같은 원리)
function solution(numbers) {
  let answer = [];
  let c;
  numbers.forEach((now) => {
    if (now < 2 || now % 2 === 0) {
      // 2보다 작거나 짝수이면
      answer.push(now + 1);
    } else {
      // 2보다 크고 홀수이면
      let c = 2;
      while (true) {
        if ((now + 1) % (c * 2) === 0) {
          // 짝수로 만든 후 / 짝수로 나누어 그 나머지가 0이면
          c = c * 2; // c를 늘려줌
        } else {
          break; // 나머지가 0이 아니면 반복문 탈출
        }
      }
      answer.push(now + c / 2);
    }
  });
  return answer;
}
