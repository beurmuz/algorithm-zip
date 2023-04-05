'''
1. input 받아오기
2. while flag != 0:
  - deque를 이용해서 맨 앞 값을 pop()하고, 해당 값 - i가 음수이면 0을 append하고, 아니면 값-i한 값을 append()
'''
from collections import deque

for test_case in range(1, 11):
    N = int(input())
    queue = deque(list(map(int, input().split())))
    flag = 0    # 반복문 탈출을 위한 변수 초기화

    while flag == 0:
        # 해당 값 - i를 위해 1~5까지 반복하도록 한다.
        for i in range(1, 6):
            num = queue.popleft()
            if num - i <= 0:
                queue.append(0)
                flag = 1
                break
            queue.append(num-i)
        if flag: 
            break
    print(f"#{test_case}", *queue)