# BFS (넓이우선탐색)

<img src='./img/bfs_1.JPG' width='400px' alt='bfs'> <br>

- 레벨별로 탐색
- 특정 노드와 연결된 노드들을 큐에 추가하고, 방문하면 pop을 함
- BFS는 DFS와 달리 상태트리에서 많이 쓰임
- 출발 지점에서 도착 지점으로 가는 최단거리를 구할 때 많이 사용함

# [python] bfs

- queue를 이용해서 푼다.

```py
def bfs(root):
    # 초기 세팅
    visited = [] # 방명록
    if root is None: # 트리가 없다는 뜻
        return [];

    q = deque() # 방문 예약지
    q.append(root)

    # q가 비어있을 때까지 반복한다. (bfs 시작)
    while q:
        nowNode = q.popleft() # queue의 맨 앞 노드를 pop한다. nowNode를 통해 접근한다.
        visited.append(nowNode.value) # 방문 표시

        if nowNode.left:
            q.append(nowNode.left)
        if nowNode.right:
            q.append(nowNode.right)
    return visited

print(bfs(root))
```
