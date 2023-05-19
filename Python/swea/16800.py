import math

T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    arr = []
    
    for i in range(1, int(math.sqrt(n))+1):
        if n % i == 0:	#곱해서 n이 되는 두 수 찾기
            arr.append((i, n//i))
    for i, (x, y) in enumerate(arr):	#index, (x, y)
        arr[i] = (x-1)+(y-1)	#배열의 각 인덱스에 (1, 1)->(x, y)까지 이동거리 저장
    print("#{} {}".format(test_case, min(arr)))	#최소값(최소거리) 출력