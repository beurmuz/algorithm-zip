-- 평균 일일 대여 요금 구하기 | O | Lv.1
-- 1. 자동차 종류: SUV 
-- 2. SUV의 평균 일일 대여 요금 구하기 -> AVG
-- 3. 평균 요금을 소수 첫번째 자리에서 반올림 -> ROUND(컬럼)
SELECT ROUND(AVG(DAILY_FEE)) AS AVERAGE_FEE
FROM CAR_RENTAL_COMPANY_CAR
WHERE CAR_TYPE = 'SUV'


-- 흉부외과 또는 일반외과 의사 목록 출력하기 | X | Lv.1
-- 1. 진료과가 흉부외과(CS)이거나 일반외과(GS)인 의사의 정보만 조회
-- 2. 결과는 고용 일자를 기준으로 내림차순 정렬, 고용 일자가 같다면 이름을 기준으로 오름차순 정렬
-- 3. 현재 HIRE_YMD가 시분초까지 출력되므로 DATE를 'YY-MM-DD' 형태로 포맷화 해야한다.
-- ! DATE_FORMAT(컬럼명, 형식)인데, 이때 연도를 %y로 하면 뒤의 2글자만 출력되고, %Y를 하면 4글자가 출력됨
SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD = 'CS' OR MCDP_CD = 'GS'
ORDER BY HIRE_YMD DESC, DR_NAME ASC


-- 과일로 만든 아이스크림 고르기 | X | Lv.1
-- 상반기 아이스크림 총 주문량이 3000보다 높고 && 주성분이 과일인 아이스크림만
-- 총 주문량이 큰 순서대로 조회 -> DESC
-- ! 주성분을 알려면 ICECREAM_INFO 테이블을 활용해야 함 -> JOIN이 필요
-- ! JOIN시 어떤 조건을 기준으로 조인하는지 명시해주어야 함 -> ON을 이용
SELECT H.FLAVOR
FROM FIRST_HALF H
INNER JOIN ICECREAM_INFO I
ON H.FLAVOR = I.FLAVOR
WHERE TOTAL_ORDER  > 3000 AND I.INGREDIENT_TYPE = 'fruit_based'
ORDER BY TOTAL_ORDER DESC


-- 3월에 태어난 여성 회원 목록 출력하기 | O | Lv.2
-- *** 생일이 3월인 여성 
-- ! 현재 생일이 시분초까지 출력되므로 %Y-%m-%d 형태로 바꿔야함
-- *** 전화번호가 NULL이면 출력 대상에서 제외
-- *** 결과는 회원 ID를 기준으로 오름차순 
SELECT MEMBER_ID, MEMBER_NAME, GENDER, DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') AS DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE TLNO IS NOT NULL AND DATE_OF_BIRTH LIKE "%-03-%" AND GENDER = 'W'
ORDER BY MEMBER_ID


-- 서울에 위치한 식당 목록 출력하기 | △ | Lv.4
-- 서울에 위치한 식당들만
-- 리뷰 평균 점수를 구하고, 소수점 세 번째 자리에서 반올림
-- 결과는 평균점수를 기준을 내림차순 정렬, 평균점수 같으면 즐겨찾기 순서로 내림차순 정렬
-- 두 테이블을 REST_ID를 기준으로 JOIN 해야함
-- ! 식당'별' 리뷰 평균 점수를 구하려면, GROUP BY로 묶어주고, 그들 중 주소가 '서울'인 가게만 추리기
-- ! GROUP BY의 조건절은 HAVING으로 표현함
-- ! 이미 REST_ID로 묶었으므로 그냥 AVG(REVIEW_SCORE)를 해주면 식당별 리뷰 평균 점수를 구할 수 있음
-- ! 소수점 세번째 자리에서 반올림이면 ROUND(컬럼명, 2)를 하면 됨
SELECT INFO.REST_ID, INFO.REST_NAME, INFO.FOOD_TYPE, INFO.FAVORITES, INFO.ADDRESS, ROUND(AVG(RE.REVIEW_SCORE), 2) AS SCORE
FROM REST_INFO INFO
JOIN REST_REVIEW RE
ON INFO.REST_ID = RE.REST_ID
GROUP BY REST_ID
HAVING INFO.ADDRESS LIKE '서울%'
ORDER BY SCORE DESC, FAVORITES DESC