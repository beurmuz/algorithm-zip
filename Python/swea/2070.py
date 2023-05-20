T = int(input())
for t in range(1, T + 1):
    (a, b) = map(int, input().split())
    answer = ''
    
    if a==b : 
        answer = '='
    elif a > b :
        answer = '>'
    else :
        answer = '<'
    
    print(f"#{t} {answer}")