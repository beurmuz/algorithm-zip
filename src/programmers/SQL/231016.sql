-- 조회수가 가장 많은 중고거래 게시판의 첨부파일 조회하기 | X
-- WHERE로 조회수가 가장 높은 중고거래 게시물에 대한 첨부파일 경로를 조회하기 위해 MAX를 활용해 조회수가 가장 높은걸 찾는다.
SELECT CONCAT('/home/grep/src/', F.BOARD_ID, '/', F.FILE_ID, F.FILE_NAME, F.FILE_EXT) AS FILE_PATH
FROM USED_GOODS_FILE F JOIN USED_GOODS_BOARD B
ON F.BOARD_ID = B.BOARD_ID
WHERE VIEWS = (SELECT MAX(VIEWS) FROM USED_GOODS_BOARD)
ORDER BY FILE_ID DESC


-- 대여 횟수가 많은 자동차들의 월별 대여 횟수 구하기 | X
-- 엄청 어렵다 | 이해를 중간까지밖에 못했다
SELECT MONTH(START_DATE) AS MONTH, CAR_ID, COUNT(HISTORY_ID) AS RECORDS
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE CAR_ID IN (
        SELECT CAR_ID
        FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
        WHERE (DATE_FORMAT(START_DATE, '%Y-%m') BETWEEN '2022-08' AND '2022-10')
        GROUP BY CAR_ID
        HAVING COUNT(CAR_ID) >= 5
    ) AND (DATE_FORMAT(START_DATE, '%Y-%m') BETWEEN '2022-08' AND '2022-10')
GROUP BY MONTH, CAR_ID
HAVING RECORDS > 0
ORDER BY MONTH ASC, CAR_ID DESC;