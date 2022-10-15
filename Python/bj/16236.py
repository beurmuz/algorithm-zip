# 테스트케이스 여러개일때 - SWEA 방식으로 풀기
import sys
from collections import deque

sys.stdin = open('input.txt', 'r')

# testcase 개수
t = int(input())

# 여러 개의 testcase가 주어짐
for test_case in range(1, t+1):
    n = int(input())
    graph = []
    for _ in range(n):
        graph.append(list(map(int, input().split())))

    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    cnt = 0
    x, y, shark_size = 0, 0, 2

    # 상어 위치 찾기
    for i in range(n):
        for j in range(n):
            if graph[i][j] == 9:
                x = i
                y = j

    def eatFish(x, y, shark_size):
        distance = [[0] * n for _ in range(n)] # 거리 체크 (아기 상어가 있는 칸에서 물고기가 있는 칸으로 이동할 때, 지나야하는 최소 칸 개수 세기)
        visited = [[0] *  n for _ in range(n)] # 방문 체크

        q = deque()
        q.append((x,y))
        visited[x][y] = 1 # 방문 체크
        tmp = [] # 임시 배열 생성

        while q: # q가 있는 동안 반복
            cur_x, cur_y = q.popleft() # queue의 맨 앞 값 shift해오기
            for i in range(4): # 4방향 탐색
                nx = cur_x + dx[i]
                ny = cur_y + dy[i]

                # nx, ny가 범위 내에 있는지, 아직 방문하지 않았는지 검사하기
                if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == 0:
                    if graph[nx][ny] <= shark_size: # 물고기 크기보다 큰 경우만 아기 상어가 지나갈 수 있음
                        q.append((nx, ny)) # 방문 가능한 곳을 q에 바로 저장
                        visited[nx][ny] = 1
                        distance[nx][ny] = distance[cur_x][cur_y] + 1 # 한칸 이동했으니 거리 저장하기
                        if graph[nx][ny] < shark_size and graph[nx][ny] != 0: # 먹을 수 있는 물고기가 있다면
                            tmp.append((nx, ny, distance[nx][ny]))
        # 거리가 가까운 물고기가 많으면, 가장 위에 있는 물고기, 그러한 물고기가 여러마리면, 가장 왼쪽에 있는 물고기 먹기
        return sorted(tmp, key=lambda x: (-x[2],-x[0],-x[1]))

    cnt = 0
    result = 0 # 초 세기

    while 1:
        shark = eatFish(x, y, shark_size)
        # 더이상 먹을 수 있는 물고기가 공간에 없다면, 아기 상어는 엄마 상어에게 도움을 요청
        if len(shark) == 0:
            break
        # 거리가 가까운 물고기가 많으면, 가장 위에 있는 물고기, 그러한 물고기가 여러마리면, 가장 왼쪽에 있는 물고기 먹기 -> eatFish에서 정렬한 채로 값을 주므로
        nx, ny, dist = shark.pop()

        # 움직인 칸수 = 시간
        result += dist
        graph[x][y] = 0
        graph[nx][ny] = 0
        # 상어 좌표를 먹은 물고기 좌표로 옮기기
        x, y = nx, ny
        cnt += 1
        if cnt == shark_size:
            shark_size += 1
            cnt = 0

    print(result)


# 백준 제출
from collections import deque
n = int(input())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
cnt = 0
x, y, shark_size = 0, 0, 2

# 상어 위치 찾기
for i in range(n):
    for j in range(n):
        if graph[i][j] == 9:
            x = i
            y = j

def eatFish(x, y, shark_size):
    distance = [[0] * n for _ in range(n)] # 거리 체크 (아기 상어가 있는 칸에서 물고기가 있는 칸으로 이동할 때, 지나야하는 최소 칸 개수 세기)
    visited = [[0] *  n for _ in range(n)] # 방문 체크

    q = deque()
    q.append((x,y))
    visited[x][y] = 1 # 방문 체크
    tmp = [] # 임시 배열 생성

    while q: # q가 있는 동안 반복
        cur_x, cur_y = q.popleft() # queue의 맨 앞 값 shift해오기
        for i in range(4): # 4방향 탐색
            nx = cur_x + dx[i]
            ny = cur_y + dy[i]

            # nx, ny가 범위 내에 있는지, 아직 방문하지 않았는지 검사하기
            if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == 0:
                if graph[nx][ny] <= shark_size: # 물고기 크기보다 큰 경우만 아기 상어가 지나갈 수 있음
                    q.append((nx, ny)) # 방문 가능한 곳을 q에 바로 저장
                    visited[nx][ny] = 1
                    distance[nx][ny] = distance[cur_x][cur_y] + 1 # 한칸 이동했으니 거리 저장하기
                    if graph[nx][ny] < shark_size and graph[nx][ny] != 0: # 먹을 수 있는 물고기가 있다면
                        tmp.append((nx, ny, distance[nx][ny]))
    # 거리가 가까운 물고기가 많으면, 가장 위에 있는 물고기, 그러한 물고기가 여러마리면, 가장 왼쪽에 있는 물고기 먹기
    return sorted(tmp, key=lambda x: (-x[2],-x[0],-x[1]))

cnt = 0
result = 0 # 초 세기

while 1:
    shark = eatFish(x, y, shark_size)
    # 더이상 먹을 수 있는 물고기가 공간에 없다면, 아기 상어는 엄마 상어에게 도움을 요청
    if len(shark) == 0:
        break
    # 거리가 가까운 물고기가 많으면, 가장 위에 있는 물고기, 그러한 물고기가 여러마리면, 가장 왼쪽에 있는 물고기 먹기 -> eatFish에서 정렬한 채로 값을 주므로
    nx, ny, dist = shark.pop()

    # 움직인 칸수 = 시간
    result += dist
    graph[x][y] = 0
    graph[nx][ny] = 0
    # 상어 좌표를 먹은 물고기 좌표로 옮기기
    x, y = nx, ny
    cnt += 1
    if cnt == shark_size:
        shark_size += 1
        cnt = 0

print(result)