/**
 * 다시 풀기!
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    return this.heap;
  }

  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  getLeftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }

  getRightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }

  insert(value) {
    // 항상 말단에 push한다.
    this.heap.push(value);
    this.resortUp();
    return this.heap;
  }

  resortUp() {
    let childIdx = this.size() - 1;
    let parentIdx = this.getParentIdx(childIdx);

    // child값과 parent값을 비교하며 순서를 바꿔준다.
    while (this.heap[childIdx] < this.heap[parentIdx]) {
      this.swap(childIdx, parentIdx);

      childIdx = parentIdx;
      parentIdx = this.getParentIdx(parentIdx);
    }
  }

  delete() {
    // 항상 root 자리에 있는 값을 삭제한다.
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop(); // 말단 값 가져와서 root에 넣기
    this.resortDown(); // 재정렬

    return value;
  }

  resortDown() {
    let parentIdx = 0;
    let leftChildIdx = this.getLeftChildIdx(parentIdx);
    let rightChildIdx = this.getRightChildIdx(parentIdx);

    while (
      (leftChildIdx <= this.size() - 1 &&
        this.heap[leftChildIdx] < this.heap[parentIdx]) ||
      (rightChildIdx <= this.size() - 1 &&
        this.heap[rightChildIdx] < this.heap[parentIdx])
    ) {
      if (
        rightChildIdx <= this.size() - 1 &&
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
      ) {
        this.swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
      } else {
        this.swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
      }
      leftChildIdx = this.getLeftChildIdx(parentIdx);
      rightChildIdx = this.getRightChildIdx(parentIdx);
    }
  }
}

function solution(scoville, K) {
  let heap = new MinHeap();
  scoville.forEach((e) => heap.insert(e));

  let count = 0;
  while (heap.size() > 1 && heap.heap[0] < K) {
    count++;
    heap.insert(heap.delete() + heap.delete() * 2);
  }
  return heap.heap[0] >= K ? count : -1;
}
