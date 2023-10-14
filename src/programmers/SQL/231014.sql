-- 즐겨찾기가 가장 많은 식당 정보 출력하기 | X
-- ✅ 서브 쿼리에서 다중 조건을 동시에 만족하기 위해서는 IN을 사용해야한다.
    -- ✅ IN 연산자를 사용하면 서브 쿼리 결과에서 여러 행과 여러 컬럼을 동시에 비교할 수 있기 때문이다.
SELECT FOOD_TYPE, REST_ID, REST_NAME, FAVORITES
FROM REST_INFO
-- 서브 쿼리의 두가지 조건을 동시 만족해야하기에 (괄호)로 묶어준 뒤 IN으로 비교해준다.
WHERE (FOOD_TYPE, FAVORITES) IN ( 
                                -- 음식 종류별 최대 값을 찾기 위해 종류로 그룹화한 후 MAX 집계함수를 통해서 구한다.
                                SELECT FOOD_TYPE, MAX(FAVORITES)
                                FROM REST_INFO
                                GROUP BY FOOD_TYPE)
ORDER BY FOOD_TYPE DESC


-- 대여 기록이 존재하는 자동차 리스트 구하기 | O
-- ✅ DISTINCT: 중복을 없애는 방법
SELECT DISTINCT C.CAR_ID 
FROM CAR_RENTAL_COMPANY_CAR C JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY H
ON C.CAR_ID = H.CAR_ID
WHERE C.CAR_TYPE = '세단' AND H.START_DATE LIKE "2022-10%"
ORDER BY C.CAR_ID DESC


-- 없어진 기록 찾기 | O
SELECT ANIMAL_ID, NAME
FROM ANIMAL_OUTS 
WHERE ANIMAL_ID NOT IN (SELECT ANIMAL_ID FROM ANIMAL_INS)


-- 조건에 맞는 사용자 정보 조회하기 | X
-- ✅ CONCAT을 이용하여 각 컬럼을 연결해 하나의 주소로 출력할 수 있다.
-- ✅ CONCAT과 LEFT, MID, RIGHT를 이용해서 전화번호 형태를 바꾸어 출력할 수 있다. 
SELECT U.USER_ID, U.NICKNAME, CONCAT(U.CITY, ' ', U.STREET_ADDRESS1, ' ', U.STREET_ADDRESS2) AS '전체주소', CONCAT(LEFT(TLNO, 3), '-', MID(TLNO, 4, 4), '-', RIGHT(TLNO, 4)) AS TLNO
FROM USED_GOODS_BOARD B JOIN USED_GOODS_USER U
ON B.WRITER_ID = U.USER_ID
GROUP BY WRITER_ID
HAVING COUNT(WRITER_ID) >= 3
ORDER BY U.USER_ID DESC
