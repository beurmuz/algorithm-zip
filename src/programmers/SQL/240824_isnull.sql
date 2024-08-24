-- 경기도에 위치한 식품창고 목록 출력하기 | O | Lv.1
-- 경기도에 위치한 창고들만
-- 냉동 시설 여부가 NULL이면 'N'으로 출력
-- 창고 ID 기준으로 오름차순 정렬
-- ! IFNULL(컬럼명, NULL일 경우 넣고싶은 문자)를 통해 NULL처리를 할 수 있다.
SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, IFNULL(FREEZER_YN, 'N') AS FREEZER_YN
FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '%경기%'
ORDER BY WAREHOUSE_ID ASC


-- 나이 정보가 없는 회원 수 구하기 | O | Lv.1
-- 나이정보가 없는 회원 찾기, 단 컬럼명은 USERS
SELECT COUNT(*) AS USERS
FROM USER_INFO
WHERE AGE IS NULL


-- ROOT 아이템 구하기 | X | Lv.2
-- ROOT ITEM 찾기
-- 아이템명 출력
-- 아이템ID 기준으로 오름차순 정렬
SELECT I.ITEM_ID, I.ITEM_NAME
FROM ITEM_INFO AS I
JOIN ITEM_TREE AS T
ON I.ITEM_ID = T.ITEM_ID
WHERE T.PARENT_ITEM_ID IS NULL
ORDER BY ITEM_ID ASC;


-- 업그레이드 할 수 없는 아이템 구하기 | X | Lv.3
-- 아이템 ID를 기준으로 내림차순 정렬
-- PARENT_ITEM_ID가 현재 ITEM_ID와 같으면 더이상 업그레이드할 수 없다.
SELECT F.ITEM_ID, ITEM_NAME, RARITY
FROM ITEM_INFO AS F
LEFT JOIN ITEM_TREE AS T
ON F.ITEM_ID = T.PARENT_ITEM_ID
WHERE PARENT_ITEM_ID IS NULL
ORDER BY ITEM_ID DESC


-- 잡은 물고기의 평균 길이 구하기 | O | Lv.1
-- LENGTH가 NULL이면 10으로 처리해서 평균 길이 맞추기
SELECT ROUND(AVG(IFNULL(LENGTH, 10)), 2) AS AVERAGE_LENGTH
FROM FISH_INFO