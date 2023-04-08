'''
나무 성장 억제하기
- 제초제는 k의 범위만큼 '대각선'으로 퍼지며, 벽이 있는 경우 가로막혀 전파되지 않는다.
- 1년동안 나무의 성장과 억제는 다음과 같이 이뤄진다. 

1. 인접한 네 개의 칸 중 나무가 있는 칸의 수만큼 나무가 성장한다. => 나무 성장함수 만들기
  - 성장은 모든 나무에게 동시에 일어난다.(모두 1씩 성장) 

2. 기존에 있던 나무들은 인접한 4개의 칸 중 벽, 다른 나무, 제초제 모두 없는 칸에 번식을 진행한다. => 번식하려는 칸이 빈칸인지 체크하는 함수 만들기
  - 이때 각 칸의 나무 그루 수에서 총 번식이 가능한 칸의 개수만큼 나누어진 그루 수만큼 번식이 진행되고,
  - 나눌 때 생기는 나머지는 버린다. (모두 동시에 발생한다.)

3. 각 칸 중 제초제를 뿌렸을 때 나무가 가장 많이 박멸되는 칸에 제초제를 뿌림 => board 중 최댓값을 찾는 함수 만들기
    - 만약 나무의 수가 동일한 칸이있다면, 행이 작은 순서대로, 행이 같으면 열이 작은 칸에 뿌린다. 
  - if 나무가 없는 칸이면:
        제초제를 뿌리면 박멸되는 나무가 없으므로 그냥 건너뛴다
  - elif 나무가 있는 칸이면:
        4개의 대각선 방향으로 k칸만큼 전파된다
        - 단, 전파되는 도중 벽이 있거나 or 나무가 아예 없는 칸이 있으면:
            그 칸까지는 제초제가 뿌려지며, 그 이후 칸으로는 제초제가 전파되지 않는다.
             
            제초제가 뿌려진 칸에는 c년만큼 제초제가 남아있다가, C+1년때가 될 떄 사라진다.
            제초제가 뿌려진 곳에 다시 제초제가 뿌려지는 경우:
                새로 뿌려진 해로부터 다시 C년동안 제초제가 유지된다.
'''
# n: 격자의 크기, m: 박멸이 진행되는 수, k: 제초제의 확산 범위, c: 제초제가 남아있는 년 수
n, m, k, c = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]

die_tree = 0 # output: m년동안 총 박멸한 나무의 그루 수
die_board = [[0]*n for _ in range(n)] # 제초제 뿌리고 남은 년수를 저장하는 배열


# 범위 내에 있는지 체크하는 함수 
def check_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < n

# 제초제가 뿌려있는지 아닌지를 검사 => 번식은 제초제도 없어야 하기 때문
def check_die_board(x, y):
    if die_board[x][y] == 0: # 뿌려져있지 않다면
        return True
    else:
        return False

# 제초제 뿌릴 위치 찾기
def find_medicien_pos():
    maxIndex = [-1, -1]
    maxValue = -1
    for i in range(n):
        for j in range(n):
            total_tree = 0
            if board[i][j] > 0: # 나무인 경우 대각선 합을 구한다.
                around_sum = 0
                for z in range(4):
                    nx = i
                    ny = j
                    for _ in range(k): # k만큼까지 대각선을 확인해야한다.
                        nx += ddx[z]
                        ny += ddy[z]
                        if check_range(nx, ny) and board[nx][ny] != -1 : # 범위 내에 있고 벽이 아닌 경우
                            around_sum += board[nx][ny]
                        else:
                            break
                total_tree = around_sum + board[i][j]
                if(maxValue < total_tree):
                    maxValue = total_tree
                    maxIndex = [i, j]
    return maxIndex

# 제초제를 뿌린다.
def spread_medicien(m_pos): 
    # 1년이 지났으므로 남아있는 년수를 -1 해준다.
    for i in range(n):
        for j in range(n):
            if die_board[i][j] > 0:
                die_board[i][j] -= 1

    die_sum = board[m_pos[0]][m_pos[1]] # 최댓값이 있는 지점의 나무 수로 갱신한다.
    board[m_pos[0]][m_pos[1]] = 0 # 제초제가 뿌려진다.   
    die_board[m_pos[0]][m_pos[1]] = c # 최댓값이 있는 지점을 c로 갱신한다.

    for z in range(4):
        nx = m_pos[0]
        ny = m_pos[1]
        for s in range(k):
            nx += ddx[z]
            ny += ddy[z]
            if check_range(nx, ny) and board[nx][ny] != -1:
                die_board[nx][ny] = c # c년이 될때까지 남아있는다.
                die_sum += board[nx][ny]
                board[nx][ny] = 0 # 제초제를 뿌렸으니 0이 된다.
            else: break
    
    return die_sum

# 좌, 상, 우, 하
dx = [0, -1, 0, 1]
dy = [-1, 0, 1, 0]

# 대각선 좌위, 우위, 좌하, 우하
ddx = [-1, -1, 1, 1]
ddy = [-1, 1, -1, 1]

# 나무를 성장시키는 함수
def tree_growth():
    for i in range(n):
        for j in range(n):
            if board[i][j] > 0: # 나무가 있는 경우
                for z in range(4):
                    nx = i + dx[z]
                    ny = j + dy[z]
                    if check_range(nx, ny) and board[nx][ny] > 0:
                        board[i][j] += 1

# 나무를 번식시키는 함수
def birth_around():
    new_board = [[0]*n for _ in range(n)]
    # 현재 지점을 기준으로 주변에 번식시키는 함수
    # 4방면을 탐색하며 빈 칸이 몇개인지 체크
    for i in range(n):
        for j in range(n):
            count_empty = []
            if board[i][j] > 0: # 나무를 만나면
                for z in range(4):
                    nx = dx[z] + i
                    ny = dy[z] + j
                    if check_range(nx, ny) and check_die_board(nx, ny) and board[nx][ny] == 0: # 범위 내에 있고 빈칸이면
                        count_empty.append([nx,ny]) # 빈칸의 위치를 count_empty에 넣는다.
                if len(count_empty) > 0:
                    add_tree = board[i][j] // len(count_empty) # 현재 칸에 있는 나무를 빈칸 수로 나눈 후
                    for s in range(0, len(count_empty)):
                        new_board[count_empty[s][0]][count_empty[s][1]] += add_tree # 주변 빈칸에 더해준다.
    
    # 기존 board와 새로운 board를 합친다.
    for i in range(n):
        for j in range(n):
            board[i][j] += new_board[i][j]


# 최종으로 크게 돌려야 할 반복문 => m년 동안 반복이므로 
for i in range(m):
    # 1. 나무가 있는 칸을 찾으며 나무 성장시키기
    tree_growth()

    # 2. 나무 번식시키기
    birth_around()

    # 3. 제초제 뿌릴 위치 찾기
    m_pos = find_medicien_pos()

    # 4. 제초제 뿌리기 (4개의 대각선 방향으로 k칸 만큼 전파)
    d_tree = spread_medicien(m_pos)

    die_tree += d_tree

print(die_tree)