-- ! 참고로 Where 절에서는 집계함수를 사용할 수 없다.

-- 가장 비싼 상품 구하기 | O | Lv.1
가장 높은 판매가를 출력
SELECT MAX(PRICE) AS MAX_PRICE
FROM PRODUCT


-- 가격이 제일 비싼 식품의 정보 출력하기 | △ | Lv.2
-- ! MAX(PRICE) AS PRICE를 하면 안되는 이유?
-- !  => MAX(PRICE)는 상품 내용과 관계없이 가격 컬럼에서 제일 큰 값이 출력한다.
-- 때문에 DESC로 정렬 후, LIMIT으로 맨 위에 있는 Row 값만 추출하면 된다.
SELECT PRODUCT_ID, PRODUCT_NAME, PRODUCT_CD, CATEGORY, PRICE
FROM FOOD_PRODUCT
ORDER BY PRICE DESC
LIMIT 1; 


-- 최댓값 구하기 | O | Lv.1
-- ! 가장 최근에 들어온 것은 DATE값이 가장 MAX인 값을 찾으면 된다.
SELECT MAX(DATETIME) AS '시간'
FROM ANIMAL_INS


-- 최솟값 구하기 | O | Lv.2
-- ! 가장 먼저 들어온 것은 DATE값이 가장 MIN인 값을 찾으면 된다.
SELECT MIN(DATETIME) AS '시간'
FROM ANIMAL_INS


-- 중복 제거하기 | O | Lv.2
-- 동물의 이름 몇 개 인지 찾기
-- 이름이 NULL인 경우는 제외
-- 중복되는 이름은 하나로 합칠 것
-- ! DISTINCT는 중복을 제거하고 싶은 컬럼명 앞에 작성하면 된다.
SELECT COUNT(DISTINCT NAME) AS 'count'
FROM ANIMAL_INS
WHERE NAME IS NOT NULL


-- 조건에 맞는 아이템들의 가격의 총합 구하기 | O | Lv.2
-- 희귀도가 'LEGEND'인 아이템들만
-- 가격의 총합 구하기
SELECT SUM(PRICE) AS TOTAL_PRICE
FROM ITEM_INFO
WHERE RARITY = 'LEGEND'


-- 물고기 종류 별 대어 찾기 | X | Lv.3
-- 물고기 종류'별'로 가장 큰 물고기의 정보를 출력
-- 물고기의 ID에 대해 오름차순 정렬
-- ! F.FISH_TYPE별 최댓값을 찾은 테이블과 그 최댓값과 일치하는 row를 찾아 출력한다.
-- 1) IN, 서브쿼리 활용
SELECT F.ID, N.FISH_NAME, F.LENGTH
FROM FISH_INFO F
JOIN FISH_NAME_INFO N
ON F.FISH_TYPE = N.FISH_TYPE
WHERE (F.FISH_TYPE, F.LENGTH) IN (
    SELECT FISH_TYPE, MAX(LENGTH)
    FROM FISH_INFO
    GROUP BY FISH_TYPE
)
ORDER BY F.ID ASC


-- 잡은 물고기 중 가장 큰 물고기의 길이 구하기 | O | Lv.1
-- 가장 큰 물고기의 길이 출력하기
-- ! 길이에 CONCAT을 이용하여 'cm'을 붙여서 출력하기
-- 길이 만 출력하면 되는것이므로, 집계함수만을 이용해서 추출하면 된다.
SELECT CONCAT(MAX(LENGTH), 'cm') AS MAX_LENGTH
FROM FISH_INFO


-- 연도별 대장균 크기의 편차 구하기 | X | Lv.2
-- ! 서브쿼리를 'FROM'절에서 활용하면, 서브쿼리의 결과를 테이블처럼 사용하여 메인 쿼리에서 처리할 수 있다.
-- 분화된 연도, 분화된 연도별 대장균 크기의 편차, 대장균 개체의 ID를 출력
-- 분화된 연도'별' 대장균 크기의 편차 구하기 (분화된 연도별 가장 큰 대장균의 크기 - 각 대장균의 크기)
-- 연도에 대해 오름차순, 대장균 크기의 편차에 대해 오름차순 정렬
-- SELECT SUB.YEAR, SUB.MAX_SIZE, SUB.SIZE_OF_COLONY, SUB.ID
SELECT SUB.YEAR, (SUB.MAX_SIZE - SUB.SIZE_OF_COLONY) AS YEAR_DEV, SUB.ID
FROM (
    SELECT ID,
           YEAR(DIFFERENTIATION_DATE) AS YEAR, 
           SIZE_OF_COLONY, 
           MAX(SIZE_OF_COLONY) OVER (PARTITION BY YEAR(DIFFERENTIATION_DATE)) AS MAX_SIZE
    FROM ECOLI_DATA
    ) AS SUB
ORDER BY YEAR ASC, YEAR_DEV ASC