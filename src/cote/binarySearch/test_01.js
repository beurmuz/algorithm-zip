'use strict';

const first = (array, target, start, end) => {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  if (mid === 0 || array[mid - 1] < target && array[mid] === target) return mid;
  else if (array[mid] < target) return first(array, target, mid + 1, end);
  else return first(array, target, start, mid - 1);
}

const last = (array, target, start, end) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (mid === array.length - 1 || array[mid + 1] > target && array[mid] === target) return mid;
  else if (array[mid] <= target) return last(array, target, mid + 1, end);
  else return last(array, target, start, mid - 1);
}

const solution = (N, x, datas) => {
  const f = first(datas, x, 0, N);
  if (f === -1) {
    console.log(-1);
    return;
  }
  const l = last(datas, x, 0, N);
  console.log(l - f + 1);
}

solution(7, 2, [1, 1, 2, 2, 2, 2, 3]);