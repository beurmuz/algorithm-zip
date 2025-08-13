/**
 * 최소 힙, minHeap 문제
 *
 * 최소 힙을 이용하면 모든 음식의 스코빌 지수를 하나씩 체크하지 않고도 K값보다 크고 작은지 알 수 있다.
 * -> Min Heap은 root node값이 항상 최솟값이기 때문에, root node값만 살펴보면 된다.
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

  heapPop() {
    let heapSize = this.size();
    if (!heapSize) return null;
    if (heapSize === 1) return this.heap.pop(); // 현재 있는 애를 return

    const value = this.heap[0]; // heap은 root에서만 삭제 가능
    this.heap[0] = this.heap.pop(); // 맨 말단에 있는 값을 head로 가져오기
    this.bubbleDown();
    return value;
  }

  heapPush(value) {
    this.heap.push(value);
    this.bubbleUp();

    return this.heap;
  }

  bubbleUp() {
    let child = this.size() - 1;
    let parent = this.getParentIdx(child);

    while (this.heap[child] < this.heap[parent]) {
      this.swap(child, parent);

      child = parent; // 큰 값을 아래로 내려주기
      parent = this.getParentIdx(parent); // parent의 부모 값을 parent로 가져옴
    }
  }

  bubbleDown() {
    let parent = 0; // root
    let leftChild = this.getLeftChildIdx(parent);
    let rightChild = this.getRightChildIdx(parent);

    while (
      (leftChild <= this.size() - 1 &&
        this.heap[leftChild] < this.heap[parent]) ||
      (rightChild <= this.size() - 1 &&
        this.heap[rightChild] < this.heap[parent])
    ) {
      if (
        rightChild <= this.size() - 1 &&
        this.heap[leftChild] > this.heap[rightChild]
      ) {
        this.swap(parent, rightChild);
        parent = rightChild;
      } else {
        this.swap(parent, leftChild);
        parent = leftChild;
      }
      // parent를 갱신했으므로 leftChild, rightChild도 새로 갱신해야 함
      leftChild = this.getLeftChildIdx(parent);
      rightChild = this.getRightChildIdx(parent);
    }
  }
}

function solution(scoville, K) {
  let count = 0;

  const heap = new MinHeap();
  scoville.forEach((el) => heap.heapPush(el));

  while (heap.heap[0] < K && heap.size() > 1) {
    count++;
    heap.heapPush(heap.heapPop() + heap.heapPop() * 2);
    // console.log(heap);
  }
  return heap.heap[0] >= K ? count : -1;
}
