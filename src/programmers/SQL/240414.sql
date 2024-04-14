-- 업그레이드 된 아이템 구하기 | △
-- 아이템의 희귀도가 'RARE'인 아이템들의 모든 다음 업그레이드 아이템의 아이템 ID(ITEM_ID), 아이템 명(ITEM_NAME), 아이템의 희귀도(RARITY)를 출력하는 SQL 문을 작성해 주세요. 
-- 이때 결과는 아이템 ID를 기준으로 내림차순 정렬주세요.

SELECT A.ITEM_ID, A.ITEM_NAME, A.RARITY
FROM ITEM_INFO A INNER JOIN ITEM_TREE B
ON A.ITEM_ID = B.ITEM_ID
WHERE B.PARENT_ITEM_ID IN (SELECT A.ITEM_ID
                           FROM ITEM_INFO A INNER JOIN ITEM_TREE B
                           ON A.ITEM_ID = B.ITEM_ID
                           WHERE A.RARITY LIKE 'RARE')
ORDER BY A.ITEM_ID DESC;