# BFS (넓이우선탐색)

<img src='./img/bfs_1.JPG' width='400px' alt='bfs'> <br>

- 레벨별로 탐색
- 특정 노드와 연결된 노드들을 큐에 추가하고, 방문하면 pop을 함
- BFS는 DFS와 달리 상태트리에서 많이 쓰임
- 출발 지점에서 도착 지점으로 가는 최단거리를 구할 때 많이 사용함

# [python]

## 트리의 탐색 방법 - bfs

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

## 그래프의 탐색 방법 - bfs

- 인접 리스트와 그래프를 탐색하는 방법이다.

```py
graph = {
    'A': ['B', 'D', 'E'],
    'B': ['A', 'C', 'D'],
    'C': ['B'],
    'D': ['A', 'B'],
    'E': ['A']
}

from collections import deque

def bfs(graph, start_v):
    visited = [start_v]
    queue = deque(start_v) # 시작 노드를 queue에 넣고 시작한다.

    while queue:
        now_v = queue.popleft()
        for v in graph[now_v]:
            if v not in visited:
                visitied.append(v)
                queue.append(v) # 나중에 들릴게~
    return visited

bfs(graph, 'A')
```

### 섬 갯수 카운트하기 - bfs

```py
from collections import deque



def numIslands(grid):
    answer = 0
    m = len(grid) # 4
    n = len(grid[0]) # 5
    visited = [[False] * n for _ in range(m)]
    dx = [-1, 1, 0, 0] # 상, 하, 좌, 우
    dy = [0, 0, -1, 1]

    def bfs(x, y):
        visited[x][y] = True # 방문 표시
        q = deque((x, y))

        while q:
            nowX, nowY = q.popleft()
            for k in range(4):
                nextX = nowX + dx[k]
                nextY = nowY + dy[k]

                if (nextX >= 0 and nextX < m) and (nextY >= 0 and nextY < n): # 0~m, 0~n이내에 있고
                    if grid[nextX][nextY] == 1 and not visited[nextX][nextY]: # 섬이고 아직 방문하지 않았다면
                        visited[nextX][nextY] = True
                        q.append((nextX, nextY))

    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1 and not visited[i][j]:
                bfs(i, j)
                answer += 1

    return answer

print(numIslands(grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]))
```
