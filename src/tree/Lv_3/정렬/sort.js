// ----------------------------------------------------------------------
/**
 * 🔍 버블 정렬 구현 | O | 24.08.07 🔍
 *
 * [정렬 - Bubble Sort]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map(Number);

function bubble_sort(arr) {
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubble_sort(arr).join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 선택 정렬 구현 | O | 24.08.07 🔍
 *
 * [정렬 - Selection Sort]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map(Number);

function selection_sort(arr) {
  for (let i = 0; i < N - 1; i++) {
    let min = i;
    for (let j = i + 1; j < N; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selection_sort(arr).join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 삽입 정렬 구현 | O | 24.08.08, 08.11 복습 🔍
 *
 * [정렬 - Insertion Sort]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].trim().split(" ").map(Number);

function insertion_sort(arr) {
  for (let i = 1; i < N; i++) {
    let now = arr[i];
    let j = i - 1;

    while (j >= 0 && now < arr[j]) {
      // j는 현재 값(now)을 기준으로 앞에 있는 값들을 탐색해야 함
      arr[j + 1] = arr[j]; // 한 칸씩 뒤로 밀고
      j--;
    }
    // while문을 빠져나왔다는 것은 앞을 순회하던 중 now값보다 큰 값을 찾았거나 j가 0이 된 경우
    arr[j + 1] = now;
  }
  return arr;
}
console.log(insertion_sort(arr).join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 기수 정렬 구현 | X | 24.08.08, 08.11 복습 🔍
 *
 * [정렬 - Radix Sort]
 */
const input = require("fs").readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

const maxK = 6;

function radix_sort() {
  let digit = 1; // 현재 자릿수 (1, 10, 100, ...)

  for (let cnt = 0; cnt < maxK; cnt++) {
    // 각 자릿수에 해당하는 숫자들의 값을 저장할 배열 선언
    const classifyArr = Array.from({ length: 10 }, () => []);
    arr.forEach((num) => {
      // 현재 자릿수로 한번 나누어준 값을 10으로 나눈 나머지값이 x자릿수의 값이 됨
      const nowDigitNum = Math.floor(num / digit) % 10;
      classifyArr[nowDigitNum].push(num); // 숫자에 맞춰 push
    });

    arr = [];
    classifyArr.forEach((bucket) => {
      bucket.forEach((num) => arr.push(num));
    });
    digit *= 10; // 그 다음 자릿수를 정렬해야하므로 *10
  }
}

radix_sort();

console.log(arr.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 병합 정렬 구현 | X | 24.08.11 🔍
 *
 * [정렬 - Merge Sort]
 */
