-- 식품분류별 가장 비싼 식품의 정보 조회하기 | X
-- 서브쿼리 작성을 잘 못하는 듯하다. 
-- '식품분류별'로 '가격이 제일 비싼 식품'의 분류, 가격, 이름을 조회 해야하므로, 식품 분류별 가격이 제일 비싼 식품을 서브쿼리절로 구한다.
SELECT CATEGORY, PRICE AS MAX_PRICE, PRODUCT_NAME
FROM FOOD_PRODUCT
WHERE PRICE IN ( SELECT MAX(PRICE) FROM FOOD_PRODUCT GROUP BY CATEGORY ) 
      AND CATEGORY IN ('과자', '국', '김치', '식용유')
ORDER BY PRICE DESC