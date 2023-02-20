# E: 1~15 | S: 1~28 | M: 1~19
'''
Example
(E, S, M) = (12, 1, 19) => 30 = (E)15+15+15+12 = (S)28+28+1 = (M)19+19+19
'''

# 입력
E, S, M = map(int, input().split())
year = 1

while True:
    if((year-E) % 15 == 0) and ((year-S) % 28 == 0) and ((year-M) % 19 == 0): # 모든 값의 나머지가 0이 되는 순간 반복문을 멈춘다.
        break
    year += 1
    
print(year)
    