T = int(input()) # 테스트케이스 수 받아오기 

# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1): # 1부터 T까지 반복
    #datas = input().split() # ['3', '17', '1', '39', '8', '41', '2', '32', '99', '2']
    datas = map(int, input().split()) # map 형태로 바뀜
    answer = 0 # 홀수값만 더해 저장한 변수
    for data in datas:
        if data%2  == 1:
            answer += data
    print("#"+str(test_case),str(answer)) # ','로 구분 시 띄어쓰기 한칸으로 구분지어 나옴
