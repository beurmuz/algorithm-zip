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
 * 🔍 삽입 정렬 구현 | O | 24.08.08 🔍
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

function Insertion_sort(arr) {
  for (let i = 1; i < N; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

console.log(Insertion_sort(arr).join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 기수 정렬 구현 | X | 24.08.08 🔍
 *
 * [정렬 - Radix Sort]
 */
const input = require("fs").readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

const maxK = 6; // 100000, 10000, 1000, 100, 10, 1의 자리

function radixSort() {
  let p = 1; // p는 1, 10, 100, ...으로, 자릿수를 구하기 위해 나눠주는 값을 의미함
  for (let pos = 0; pos < maxK; pos++) {
    // pos: 자릿수
    const newArr = Array(10).fill([]); // 0~9까지의 숫자정보를 저장할 배열 선언
    arr.forEach((el) => {
      const digit = Math.floor(el / p) % 10;
      newArr[digit].push(el); // 자릿수에 있는 숫자를 기준으로 값을 분류
    });

    arr = [];
    newArr.forEach((bucket) => {
      bucket.forEach((num) => {
        // 하나의 숫자에 여러 개의 값이 들어있기도 하니 각 숫자를 함께 순회해야 함
        arr.push(num);
      });
    });
    p *= 10; // 다음 자릿수를 구해야하므로 p에 10을 곱해준다.
  }
}

radixSort();
console.log(arr.join(" "));
