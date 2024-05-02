# /**
#  * [우선순위 큐?]
#  * - 시간 초과 발생으로 풀지 못한 문제.
#  * - JS 풀이도 없어서 Python 풀이를 참고했다.
#  */
from queue import PriorityQueue

rank = [1] * 100001  # rank[i] : 점수 i에 대한 현재 등수

N = int(input())

que = PriorityQueue(maxsize=N)
final = [0] * 100001


def que_check(que):
    before = 0
    count = 0

    while not que.empty():
        num = que.get()[1]
        count += 1  # count번째 사람 확인
        # print(num, count)

        if num < before:  # 이번에 꺼낸 수가 전에 꺼낸 수보다 작으면
            rank[num] = count
        before = num


# 총 3회 대회
for i in range(3):
    data = list(map(int, input().split()))

    for i in range(len(data)):
        que.put((-data[i], data[i]))  # 점수 내림차순 정렬
        final[i] += data[i]  # 성적 입력을 받을 때마다 각 사람들의 점수를 별도로 저장

    que_check(que)

    for i in range(N):
        if i == N - 1:
            print(rank[data[i]], end="")
        else:
            print(rank[data[i]], end=" ")
    print()
    # 등수 출력 후 등수는 처음부터 다시 초기화
    rank = [1] * 100001

for i in range(N):
    que.put((-final[i], final[i]))  # 점수 내림차순 정렬

que_check(que)

for i in range(N):
    if i == N - 1:
        print(rank[final[i]], end="")
    else:
        print(rank[final[i]], end=" ")
