# 그래프와 트리

### 그래프

- 노드들과 노드들 사이를 연결하는 간선으로 구성된 것이다.
- 그래프는 하나의 root node가 있고, 각 노드에 child node가 연결되어 있다.

### 트리

- 그래프의 일종이나 cycle이 없고 서로 다른 두 노드를 잇는 길이 하나뿐인 그래프를 의미한다.
- 노드가 n개인 트리는 항상 n-1개의 간선을 가진다.

# 이진 트리

- child의 개수가 2개로 제한된 트리를 '이진 트리'라고 한다.
- 이진 트리는 각 노드의 자식 수에 따라 3가지로 나뉜다.
  - Full Binary Tree
  - Complete Binary Tree
  - Perfect Binary Tree

## 이진트리를 순회하는 법

1. 깊이 우선 탐색
   - 전위 순회 (Pre-order)
   - 중위 순회 (In-order)
   - 후위 순회 (Post-order)
2. 너비 우선 탐색
   - 레벨 순회 (Level-order)

### ex01

(L) - (N) - (R)
=> N이 루트 노드일 때

- Pre-order: NLR
- In-order: LRN
- Post-order: LRN
- Level-order: NLR

### ex02

<img src='./img/tree_ex.JPG' width='400px' alt='bfs'> <br>

- Pre-order: 1234567
- In-order: 4251637
- Post-order: 4526731
- Level-order: 1234567

cf.[참고](https://doheelab.github.io/algorithm/binary_tree/)
