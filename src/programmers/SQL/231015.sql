-- 자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기 | X
-- MAX로 풀기 => CAR_ID별로 여러 기록이 있고, 그 중에서도 가장 나중에 렌탈 기록이 끝난걸 확인해야하기 때문이다.
SELECT CAR_ID,
       MAX(CASE WHEN '2022-10-16' BETWEEN DATE_FORMAT(START_DATE, '%Y-%m-%d') AND DATE_FORMAT(END_DATE, '%Y-%m-%d')
            THEN '대여중'
            ELSE '대여 가능'
            END) AS 'AVAILABILITY'
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
ORDER BY CAR_ID DESC

-- 서브쿼리 활용해서 풀기
SELECT CAR_ID,
       (CASE WHEN CAR_ID IN (
           SELECT CAR_ID
           FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
           WHERE '2022-10-16' BETWEEN START_DATE AND END_DATE)
       THEN '대여중'
       ELSE '대여 가능'
       END) AS 'AVAILABILITY'
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
ORDER BY CAR_ID DESC


-- 헤비 유저가 소유한 장소 | O
-- WHERE에 서브쿼리를 넣어서 푼다.
SELECT * 
FROM PLACES
WHERE HOST_ID IN(
    SELECT HOST_ID 
    FROM PLACES
    GROUP BY HOST_ID
    HAVING COUNT(ID) >= 2
)
ORDER BY ID ASC;