T = int(input())

for test_case in range(1, T + 1):
    t = int(input())
    arr = list(map(int, input().split()))
    arr.sort()
    dict = {}
    
    for x in arr:
        if (dict.get(x)) : 
            dict[x] += 1
        else : 
            dict[x] = 1
    
    maxCount = 0
    maxKey = 0
    
    for key, count in dict.items():
        if count >= maxCount:
            maxCount = count
            maxKey = key
    
    print(f"#{t} {maxKey}")