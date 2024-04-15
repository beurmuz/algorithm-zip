-- 잡은 물고기 중 가장 큰 물고기의 길이 구하기 | O | Lv.1
-- ✅ 최댓값 구하기, ✅ 특정 개수만 출력하기, ✅ 특정 단어 넣어서 출력하기
-- 방법 1: SELECT 문에서 MAX와 CONCAT을 이용해 구하는 방법
SELECT CONCAT(MAX(LENGTH), 'cm') AS MAX_LENGTH
FROM FISH_INFO
-- 방법 2: LENGTH 기준 내림차순 정렬 후, 특정 개수(LIMIT)만 출력하는 방법
# SELECT CONCAT(LENGTH, 'cm') AS MAX_LENGTH
# FROM FISH_INFO
# ORDER BY LENGTH DESC
# LIMIT 1;


-- 잔챙이 잡은 수 구하기 | O | Lv.1
-- LENGTH가 NULL인 ID수 구하기
SELECT COUNT(ID) AS FISH_COUNT
FROM FISH_INFO
WHERE LENGTH IS NULL;


-- 한 해에 잡은 물고기 수 구하기 | O | Lv.1
SELECT COUNT(ID) AS FISH_COUNT
FROM FISH_INFO
WHERE TIME LIKE '2021%';
-- WHERE YEAR(TIME) = '2021' -- 도 가능하다.


-- Python 개발자 찾기 | O | Lv.1
SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPER_INFOS
WHERE SKILL_1 = 'Python' OR SKILL_2 = 'Python' OR SKILL_3 = 'Python'
ORDER BY ID;