'''
1. 목적지로 가는 시작점을 찾는 문제 => 목적지를 시작점으로 지정
2. 다시 되돌아가는 경우를 제외하기 위해 방문리스트를 만든다
3. x축의 index가 0이 될 때까지 반복한다.
4. 왼쪽이나 오른쪽으로 움직일 수 있다면 이동한다.
5. 양 쪽 모두 갈 수 없다면 위로 한 칸 이동
'''

T = 10

for test_case in range(1, T+1):
    t = int(input())
    ladders = [list(map(int, input().split())) for _ in range(100)]
    visited = [[0] * 100 for _ in range(100)]

    x, y = 99, ladders[99].index(2) # 도착 지점이 있는 인덱스 번호로 가져온다.
    while x != 0:
        visited[x][y] = 1 # 방문 표시
        if y - 1 >= 0 and ladders[x][y-1] and visited[x][y-1] == 0: # 범위를 벗어나지 않고, ladders[x][y-1]에 갈 수 있고, 아직 방문하지 않았다면
            y -= 1
            continue # 아래의 코드가 실행되어서는 안되므로 건너뛰어야 한다.
        elif y + 1 < 100 and ladders[x][y+1] and visited[x][y+1] == 0: # 범위를 벗어나지 않고, ladders[x][y+1]에 갈 수 있고, 아직 방문하지 않았다면
            y += 1
            continue
        else:
            x -= 1 # 당연히 왼쪽으로 가지, 오른쪽으로 갈 일을 왜 만드나?
    answer = y # x(row)는 당연히 0이고, y(column)이 정답이 된다.

    print(f"#{t} {answer}")