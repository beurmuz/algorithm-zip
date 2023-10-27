-- 조건에 맞는 사용자와 총 거래금액 조회하기 | X
-- 거래 상태가 'DONE'인 것들중에서, WRITER_ID로 묶어주고, 총 합이 70만원 이상인 경우만 찾는다.
SELECT U.USER_ID, U.NICKNAME, SUM(PRICE) AS TOTAL_SALES
FROM USED_GOODS_BOARD B JOIN USED_GOODS_USER U
ON B.WRITER_ID = U.USER_ID
WHERE STATUS = 'DONE'
GROUP BY B.WRITER_ID
HAVING TOTAL_SALES >= 700000
ORDER BY TOTAL_SALES