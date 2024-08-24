-- 월별 잡은 물고기 수 구하기 | O | Lv.2
-- 월 기준 오름차순
-- 잡은 물고기가 없는 달은 출력하지 않는다.
SELECT COUNT(*) AS FISH_COUNT, MONTH(TIME) AS MONTH
FROM FISH_INFO
GROUP BY MONTH(TIME)
HAVING FISH_COUNT > 0
ORDER BY MONTH


-- 노선별 평균 역 사이 거리 조회하기 | O | Lv.2
-- 총 누계 거리는 소수 둘째자리 반올림 + km
-- 평균 역 사이 거리는 소수 셋째 자리에서 반올림 + km
-- 총 누계 거리 기준으로 내림차순 정렬 
SELECT ROUTE, 
       CONCAT(ROUND(SUM(D_BETWEEN_DIST), 1), 'km') AS TOTAL_DISTANCE,
       CONCAT(ROUND(SUM(D_BETWEEN_DIST) / COUNT(D_BETWEEN_DIST), 2), 'km') AS AVERAGE_DISTANCE
FROM SUBWAY_DISTANCE
GROUP BY ROUTE
ORDER BY SUM(D_BETWEEN_DIST) DESC


-- 부서별 평균 연봉 조회하기 | O | Lv.3
-- 부서'별' 평균 연봉 구하기. 평균 연봉은 소수점 첫째자리에서 반올림
-- 부서별 평균 연봉을 기준으로 내림차순 정렬
SELECT D.DEPT_ID, D.DEPT_NAME_EN, ROUND(AVG(E.SAL)) AS AVG_SAL
FROM HR_DEPARTMENT AS D
JOIN HR_EMPLOYEES AS E
ON D.DEPT_ID = E.DEPT_ID
GROUP BY D.DEPT_ID
ORDER BY AVG_SAL DESC


-- 특정 조건을 만족하는 물고기별 수와 최대 길이 구하기 | O | Lv.3
-- 평균 길이가 33cm 이상인 물고기들을 종류'별'로 분류
-- 물고기 종류에 대해 오름차순 정렬
-- 10cm 이하의 물고기들은 10cm로 취급하여 평균 길이 구하기
SELECT COUNT(*) AS FISH_COUNT, MAX(SUB.NEW_LENGTH) AS MAX_LENGTH, SUB.FISH_TYPE
FROM (
     SELECT FISH_TYPE, IFNULL(LENGTH, 10) AS NEW_LENGTH
     FROM FISH_INFO 
    ) AS SUB
GROUP BY SUB.FISH_TYPE
HAVING AVG(SUB.NEW_LENGTH) >= 33
ORDER BY SUB.FISH_TYPE


-- 연간 평가점수에 해당하는 평가 등급 및 성과금 조회하기 | X | Lv.4
-- 사원'별' 성과금 정보 조회
-- 사번 기준 오름차순
-- 연봉 * 성과금
-- SCORE에 기반하여 성과금 레이트 조회
SELECT TEMP.EMP_NO,
       EMP_NAME, 
       GRADE, 
       (CASE WHEN GRADE = 'S' THEN SAL * 0.2
             WHEN GRADE = 'A' THEN SAL * 0.15
             WHEN GRADE = 'B' THEN SAL * 0.1
             WHEN GRADE = 'C' THEN SAL * 0
        END) AS BONUS
FROM (SELECT EMP_NO, 
            (CASE WHEN AVG(SCORE) >= 96 THEN 'S'
                  WHEN AVG(SCORE) >= 90 THEN 'A'
                  WHEN AVG(SCORE) >= 80 THEN 'B'
                ELSE 'C'
            END) AS GRADE
     FROM HR_GRADE
     GROUP BY EMP_NO) AS TEMP
LEFT JOIN HR_EMPLOYEES AS HRE ON TEMP.EMP_NO = HRE.EMP_NO
ORDER BY 1 ASC