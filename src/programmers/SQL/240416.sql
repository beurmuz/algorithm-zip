-- 잡은 물고기의 평균 길이 구하기 | X | Lv.1
-- ✅ IFNULL(컬럼, num): 특정 컬럼의 NULL 값을 num으로 취급해야함
-- ✅ ROUND(값, 소수점 자릿수): 값을 몇번째 -1자리에서 반올림할지
SELECT ROUND(AVG(IFNULL(LENGTH, 10)), 2) AS AVERAGE_LENGTH // 3번째에서 반올림이므로 2로 표기한다.
FROM FISH_INFO;
-- ✅ CASE문으로도 풀 수 있다.
SELECT ROUND(AVG(CASE 
                 WHEN LENGTH IS NULL THEN 10 -- LENGTH가 NULL이라면 10으로. 
                 ELSE LENGTH END),2) AS AVERAGE_LENGTH -- 그게 아니라면 LENGTH를 그대로 출력한다.
FROM FISH_INFO;


-- 가장 큰 물고기 10마리 구하기 | O | Lv.1
SELECT ID, LENGTH
FROM FISH_INFO
ORDER BY LENGTH DESC, ID ASC
LIMIT 10;


-- 특정 형질을 가지는 대장균 찾기 | X | Lv.1
-- ✅ 비트연산자 '&' 이용하기
SELECT COUNT(ID) AS COUNT
FROM ECOLI_DATA
WHERE (GENOTYPE & 5) AND !(GENOTYPE & 2) -- 0101, 0010