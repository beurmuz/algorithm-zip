-- 자동차 평균 대여 기간 구하기 |  | Lv.2
-- 차량'별' 평균 대여 기간이 7일 이상
-- 평균 대여 기간은 소수점 두번째 자리에서 반올림
-- 평균 대여 기간 기준으로 내림차순 정렬
-- 평균 대여 기간이 같으면 자동차 ID를 기준으로 내림차순 정렬
-- ! DATEDIFF(최근, 과거) + 1을 하면 기간차를 구할 수 있다 !!!!!
SELECT CAR_ID, ROUND(AVG(DATEDIFF(END_DATE, START_DATE) + 1), 1) AS AVERAGE_DURATION
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
HAVING AVG(DATEDIFF(END_DATE, START_DATE) + 1) >= 7
ORDER BY AVERAGE_DURATION DESC, CAR_ID DESC


-- 조회수가 가장 많은 중고거래 게시판의 첨부파일 조회하기 | O | Lv.3
-- 경로는 FILE ID를 기준으로 내림차순 정렬
-- 기본 파일 경로 추가하기
SELECT CONCAT('/home/grep/src/', B.BOARD_ID, '/', F.FILE_ID, F.FILE_NAME, F.FILE_EXT) AS FILE_PATH
FROM USED_GOODS_BOARD AS B
JOIN USED_GOODS_FILE AS F
ON B.BOARD_ID = F.BOARD_ID
WHERE VIEWS = (
                SELECT MAX(VIEWS)
                FROM USED_GOODS_BOARD
                )
ORDER BY FILE_ID DESC


-- 조건에 맞는 사용자 정보 조회하기 | O | Lv.3
-- 중고거래 게시물을 3건 이상 등록한 사용자의 정보를 조회
-- 주소를 합쳐야하고
-- 전화번호 형식을 바꿔야 함
-- 회원 ID를 기준으로 내림차순
SELECT 
    WRITER_ID, 
    NICKNAME, 
    CONCAT(U.CITY, ' ', U.STREET_ADDRESS1, ' ', U.STREET_ADDRESS2)AS '전체주소',
    CONCAT(LEFT(U.TLNO, 3), '-', SUBSTRING(U.TLNO, 4, 4), '-', RIGHT(U.TLNO, 4)) AS '전화번호'
FROM USED_GOODS_BOARD AS B
JOIN USED_GOODS_USER AS U
ON B.WRITER_ID = U.USER_ID
GROUP BY WRITER_ID
HAVING COUNT(WRITER_ID) >= 3
ORDER BY B.WRITER_ID DESC


-- 특정 옵션이 포함된 자동차 리스트 구하기 | O | Lv.1
-- OPTIONS에 네비게이션이 있어야 함
-- 자동차 ID 기준 내림차순 정렬
SELECT *
FROM CAR_RENTAL_COMPANY_CAR
WHERE OPTIONS LIKE '%네비게이션%'
ORDER BY CAR_ID DESC


-- 한 해에 잡은 물고기 수 구하기 | O | Lv.1
-- 2021년도에 잡은 물고기 수 출력
SELECT COUNT(*) AS FISH_COUNT
FROM FISH_INFO
WHERE YEAR(TIME) = 2021
-- 참고로 WHERE TIME LIKE '2021%'도 가능하다.


-- DATETIME에서 DATE로 형 변환 | O | Lv.2
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') AS '날짜'
FROM ANIMAL_INS
ORDER BY ANIMAL_ID ASC


-- 카테고리 별 상품 개수 구하기 | O | Lv.2
-- 카데고리 코드별 (상품 번호 앞자리 2개) 상품 개수 출력
-- ! 특정 값의 일부만 추출하려면 SUBSTRING(컬럼명, 시작위치, 길이)를 쓰거나
-- ! 왼쪽부터 필요하다면 LEFT(컬럼명, 길이),
-- ! 오른쪽부터 필요하다면 RIGHT(컬럼명, 길이) 하면 된다. 
SELECT SUBSTRING(PRODUCT_CODE, 1, 2) AS CATEGORY, COUNT(*) AS PRODUCTS
FROM PRODUCT
GROUP BY CATEGORY
ORDER BY CATEGORY ASC


-- 연도별 평균 미세먼지 농도 조회하기 | O | Lv.2
-- 수원 지역
-- 연도'별' 평균 미세먼지 오염도 & 평균 초미세먼지 오염도 조회
-- 오염도의 컬럼명 명시, 소수 셋째 자리에서 반올림
-- 연도 기준 오름차순
SELECT YEAR(YM) AS YEAR, ROUND(AVG(PM_VAL1), 2) AS 'PM10', ROUND(AVG(PM_VAL2), 2) AS 'PM2.5'
FROM AIR_POLLUTION
WHERE LOCATION2 LIKE '수원'
GROUP BY YEAR
ORDER BY YEAR