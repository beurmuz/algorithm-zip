N = int(input())
clap = ['3', '6', '9']

for i in range(1, N+1):
    count = 0
    for j in str(i): # i를 한글자씩 돌면서
        if j in clap: # 만약 j가 clap에 있으면, count를 1 증가시킨다.
            count += 1
    if count > 0:
        i = '-' * count
    print(i, end=' ')