-- 연도별 대장균 크기의 편차 구하기 | △ | Lv.2
-- ✅ GROUP BY와 비슷한 듯 하지만 다르다. PARTITION BY를 이용하면 기존의 데이터와 집계된 값을 함께 나란히 볼 수 있다.
SELECT YEAR(DIFFERENTIATION_DATE) AS YEAR, 
       MAX(SIZE_OF_COLONY) OVER (PARTITION BY YEAR(DIFFERENTIATION_DATE)) - SIZE_OF_COLONY AS YEAR_DEV, 
       ID
FROM ECOLI_DATA
ORDER BY YEAR ASC, YEAR_DEV ASC;

-- ✅ 서브쿼리를 이용한 방법
-- ✅ MYSQL은 서브쿼리에 ALIAS을 지정해야함
SELECT SUB.YEAR, (SUB.MAX_SIZE - SUB.SIZE_OF_COLONY) AS YEAR_DEV, SUB.ID
FROM (
      SELECT YEAR(DIFFERENTIATION_DATE) AS YEAR,
      SIZE_OF_COLONY,
      MAX(SIZE_OF_COLONY) OVER (PARTITION BY YEAR(DIFFERENTIATION_DATE)) AS MAX_SIZE,
      ID
      FROM ECOLI_DATA
     ) AS SUB
ORDER BY YEAR ASC, YEAR_DEV ASC;

