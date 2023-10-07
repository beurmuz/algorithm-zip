-- 동물 수 구하기 | O
SELECT COUNT(*) AS count
FROM ANIMAL_INS


-- 동명 동물 수 찾기 | X
-- 이름이 여러 개여도 출력은 한개씩만 해야하므로 GROUP BY를 해주어야 한다.
-- ✅ HAVING 절은 WHERE 절과 비슷하지만 그룹 전체 즉, 그룹을 나타내는 결과 집합의 행에만 적용된다. WHERE 절은 개별 행에 적용된다.
SELECT NAME, COUNT(NAME) AS COUNT
FROM ANIMAL_INS
GROUP BY NAME
-- 동물 이름 중 두 번 이상 쓰인 이름만 찾는다. (WHERE말고 HAVING도 조건을 나타낸다.)
HAVING COUNT(NAME) >= 2
ORDER BY NAME;


-- 중복 제거하기 | X
-- ✅ 중복은 DISTINCT로 제거한다.
SELECT COUNT(DISTINCT NAME)
FROM ANIMAL_INS
WHERE NAME IS NOT NULL;


-- 최솟값 구하기 | O
SELECT MIN(DATETIME)
FROM ANIMAL_INS


-- 이름에 el이 들어가는 동물 찾기 | O
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE NAME LIKE "%el%" AND ANIMAL_TYPE = 'Dog';
ORDER BY NAME;


-- NULL 처리하기 | O
-- IFNULL을 이용해서 쉽게 처리할 수 있다.
SELECT ANIMAL_TYPE, IFNULL(NAME, 'No name') AS NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
