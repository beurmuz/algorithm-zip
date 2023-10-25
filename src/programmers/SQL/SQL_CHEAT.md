# 데이터베이스의 기본 개념

## SQL (Structured Query Language)

- 데이터베이스를 관리하고 조작하는 질의 언어 (= 쿼리(Query))

# 기본 명령어

## 1-1. SELECT: `필드 검색하기`

- **필드 전체나 일부를 검색**
- 일부 필드를 검색할 때 기본 필드명 대신 별명으로 바꿔보일 수 있다.
  - AS는 생략해도 된다.

### 구문

```sql
-- 방법 1) 해당 테이블의 모든 필드 검색
SELECT *
FROM 테이블명;

-- 방법 2) 해당 테이블의 특정 필드 검색
SELECT 필드명1, 필드명2, ...
FROM 테이블명;

-- 방법 3) 해당 필드의 특정 필드를 별명으로 설정하고 검색
SELECT 필드명 [AS] 별명
FROM 테이블명;
```

### 예시

```sql
-- CUSTOMERS 테이블에서 고객들의 이름, 나이 정보 조회
SELECT CUSTOMER_NAME AS NAME, CUSTOMER_AGE AGE
FROM CUSTOMERS
```

## 1-2. WHERE: `조건에 맞게 검색하기`

- **지정한 테이블에서 조건에 맞는 데이터를 검색**

### 구문

```sql
SELECT 검색필드명
FROM 테이블명
WHERE 조건식
```

### 예시

```sql
-- 나이가 30인 고객 이름, 나이 정보 조회
SELECT CUSTOMER_NAME AS NAME, CUSTOMER_AGE AS AGE
FROM CUSTOMERS
WHERE CUSTOMER_AGE = 30
```

## 1-3. AND: `모두 만족하면 검색하기`

- **지정한 테이블에서 나열한 조건을 모두 만족하는 데이터를 검색**
- 단, 하나라도 만족하지 않으면 검색하지 않음

### 구문

```sql
SELECT 검색필드명
FROM 테이블명
WHERE 조건식1 AND 조건식2
```

### 예시

```sql
-- 나이가 30이고 서울에 사는 고객의 이름정보 찾기
SELECT CUSTOMER_NAME
FROM CUSTOMERS
WHERE CUSTOMER_AGE = 30 AND CUSTOMER_CITY = '서울'
```

## 1-4. OR: `하나라도 만족하면 검색하기`

- **지정한 테이블에서 나열한 조건에 하나라도 만족하는 데이터를 검색**
- 만약 모두 만족하지 않으면 검색하지 X

### 구문

```sql
SELECT 검색필드명
FROM 테이블명
WHERE 조건식1 OR 조건식2 OR 조건식3
```

### 예시

```sql
-- 나이가 30이거나 서울에 사는 고객의 이름정보 찾기
SELECT CUSTOMER_NAME
FROM CUSTOMERS
WHERE CUSTOMER_AGE = 30 OR CUSTOMER_CITY = '서울'
```

## 1-5. BETWEEN .. AND: `범위 내에 있으면 검색하기`

- **지정한 범위의 데이터를 검색**
- 필드 형식으로 수치, 문자, 날짜 등을 지정할 수 있음

### 구문

```sql
SELECT 검색필드명
FROM 테이블명
WHERE 필드명 [NOT] BETWEEN 시작값 AND 종료값
```

### 예시

```sql
-- 나이가 20과 30 사이에 있는 고객의 이름, 나이정보 찾기
SELECT CUSTOMER_NAME, CUSTOMER_AGE
FROM CUSTOMERS
WHERE CUSTOMER_AGE BETWEEN 20 AND 30

-- 나이가 20과 30 사이가 아닌 고객의 이름, 나이정보 찾기
SELECT CUSTOMER_NAME, CUSTOMER_AGE
FROM CUSTOMERS
WHERE CUSTOMER_AGE NOT BETWEEN 20 AND 30
```

## 1-6. LIKE: `포함된 문자로 검색하기`

- **검색값이 필드에 포함된 데이터를 검색할 때 사용**
- '%'와 '\_'를 조합해서 쓴다.
  - 검색값으로 길이에 상관없이 문자열을 대체하는 '%'
  - 한 문자를 대체하는 '\_'
- **'NOT LIKE'는 필드에 검색값이 포함되지 않은 데이터를 검색한다. **

### 구문

```sql
-- 방법 1)
SELECT 검색필드명
FROM 테이블명
WHERE 필드명 [NOT] LIKE "%검색값%"

-- 방법2)
SELECT 검색필드명
FROM 테이블명
WHERE 필드명 [NOT] LIKE "_검색값_"
```

### ✅ 참고

```sql
'문자%': 문자로 시작하는 값
'%문자': 문자로 끝나는 값
'%문자%': 문자가 포함된 값
'_': 지정한 위치에 1자리 문자면 무엇이든 가능
```

### 예시

```sql
-- 생일이 2020으로 시작하는 이름, 생일 정보를 검색한다.
SELECT NAME, BIRTH_DAY
FROM CUSTOMER
WHERE BIRTH_DAY LIKE '2020%'

-- 휴대폰 번호 끝자리가 2020인 사람의 이름, 폰번호 정보를 검색한다.
SELECT NAME, PHONE_NUMBER
FROM CUSTOMER
WHERE PHONE_NUMBER LIKE '%-2020'

-- 이름에 '민'이 들어가지 않는 사람의 이름을 검색한다.
SELECT NAME
FROM CUSTOMER
WHERE NAME NOT LIKE '%민%'

-- 강남이나 양재에 살고, 여자인 사람의 이름, 성별, 주소 정보를 검색한다.
-- ✅ WHERE 조건을 '(조건1 OR 조건2) AND 조건3' 형식으로 지정할 경우, 조건1과 조건2를 OR 처리한 결과를 조건3과 AND 처리해서 검색한다.
SELECT NAME, GENDER, ADDRESS
FROM CUSTOMER
WHERE (ADDRESS LIKE '강남%' OR ADDRESS LIKE '양재%') AND GENDER = '여자'

-- 전화번호가 '___-____-____'형식이 아닌 고객의 이름과 번호를 검색한다.
SELECT NAME, PHONE_NUMBER
FROM CUSTOMER
WHERE PHONE_NUMBER NOT LIKE "___-____-____"
```

## 1-7. IN: `여러 데이터로 검색하기`

- **나열한 검색값이 필드에 포함된 데이터를 검색**
- 필드 값이 검색값n 중 하나라도 있으면 검색한다.

### 구문

```sql
SELECT 검색필드명
FROM 테이블명
WHERE 필드명 [NOT] IN (검색값1, 검색값2, 검색값3, ...)
```

### 예시

```sql
-- 지역이 인천, 서울, 경기인 여성 고객의 모든 정보를 검색한다.
SELECT *
FROM CUSTOMER
WHERE LOCATION IN ('인천', '서울', '경기') AND GENDER = 'W'
```

## 1-8. ORDER BY: `정렬 필드 지정하기`

- **나열한 필드를 기준으로 데이터를 정렬**
- 필드 뒤에 정렬 방식이 없으면 디폴트 값은 'ASC(오름차순)'이다.
  - ASC: 오름차순 정렬
  - DESC: 내림차순 정렬

### 구문

```sql
-- 방법 1) 필드명 명시를 통한 정렬
SELECT 검색필드명
FROM 테이블명
WHERE 조건식
ORDER BY 필드명1 [ASC|DESC], 필드명2 [ASC|DESC]


-- 방법 2) 필드번호 (필드 순서)의 명시를 통한 정렬
SELECT 검색필드명
FROM 테이블명
WHERE 조건식
ORDER BY 필드번호1 [ASC|DESC], 필드번호2 [ASC|DESC]
```

### 예시

```sql
-- 월급이 많고, 월급이 같다면 이름을 오름차순으로 여성 직원 정보를 나열한다.
SELECT *
FROM EMPLOYEE
WHERE GENDER = 'W'
ORDER BY PAY DESC, NAME ASC
```

## 1-9. GROUP BY: `최소, 최대, 합계 등의 취득을 위한 그룹화`

- **나열한 필드를 기준으로 데이터를 묶어준다.**
- 묶어 놓은 필드를 대상으로 `MIN()`, `MAX()`, `SUM()`, `AVG()`, `COUNT()` 등의 집계함수를 비롯해 그룹의 최솟값, 최댓값, 합계, 평균, 개수를 구한다.
- ✅ `HAVING`은 `WHERE`과 비슷한 기능으로, **그룹에 대한 검색 조건을 설정**한다.

### 구문

```sql
SELECT 검색필드명
FROM 테이블명
WHERE 조건식
GROUP BY 필드명1, 필드명2, 필드명3 ...
HAVING 그룹 내 조건식
```

### ✅ 그룹 함수(= 집계 함수)

- 그룹에 대한 값을 구하는 함수
- MIN, MAX, SUM, AVG, COUNT 등

### 예시

```sql
-- 성별별로 그룹화한 모든 정보를 검색한다.
SELECT *
FROM STUDENTS
GROUP BY GENDER


-- 성별별로 수학 점수의 합계, 평균, 최솟값, 최댓값, 응시자 수를 구하되, 응시자 수가 10명 이상이면 검색한다.
SELECT GENDER
       SUM(MATH_SCORE) AS TOTAL_SCORE,
       AVG(MATH_SCORE) AS AVG_SCORE,
       MIN(MATH_SCORE) AS MIN_SCORE,
       MAX(MATH_SOCRE) AS MAX_SOCRE,
       COUNT(MATH_SCORE) AS NUMBER_OF_PEOPLE
FROM STUDENTS
GROUP BY GENDER
HAVING COUNT(MATH_SCORE) >= 10
```

- ✅ GROUP BY로 그룹화한 데이터의 검색 조건은 WHERE 구문에서 지정하지 않고, HAVING 조건을 사용한다.
- GROUP BY 구문에 사용하는 HAVING 조건
  - `COUNT(NAME) >= 2`: NAME 필드의 개수가 2개 이상인 경우
  - `MAX(PAY) <= 500`: PAY 필드 최댓값이 500이하인 경우
  - etc ...

## 1-10. DISTINCT: `출력 필드의 중복 없애기`

- **나열한 필드 값을 중복 없이 구한다.**

### 구문

```sql
SELECT DISTINCT 검색필드명
FROM 테이블명
WHERE 조건식;
```

### 예시

```sql
-- 상품명의 중복이 없어야한다.
SELECT DISTINCT PRODUCT_NAME
FROM SALES
ORDER BY PRODUCT_NAME;
```

## 1-11. JOIN: `테이블의 연관 정보 검색하기`

- 2개 이상의 테이블의 연관 정보를 구한다.
- ON절에는 두 연관 테이블의 관계를 나타내는 조건을 설정한다.

### 구문

```sql
-- 방법 1) JOIN 명령어를 이용한 경우
SELECT 검색필드명
FROM 테이블명1
JOIN 테이블명2
ON 테이블명1 (별명1).필드명1 = 테이블명2 (별명2).필드명1


-- 방법 2) JOIN 명령어를 쓰지 않는 경우
SELECT 검색필드명
FROM 테이블명1 (별명1)
     테이블명2 (별명2)
WHERE 테이블명1 (별명1).필드명1 = 테이블명2 (별명2).필드명1 (+)
```

### JOIN의 종류

JOIN은 총 4가지가 있다.

1. INNER JOIN
   - 기준 테이블과 대상 테이블에 매칭하는 필드값이 있는 경우에 검색한다.
2. LEFT JOIN
   - 기준 테이블의 모든 필드값을 보이고, 대상 테이블에 매칭하는 필드값이 있는 경우에 검색한다. 그렇지 않다면 공백으로 보인다.
3. RIGHT JOIN
   - 대상 테이블의 모든 필드값을 보이고, 기준 테이블에 매칭하는 필드값이 있는 경우에 검색한다. 그렇지 않으면 공백으로 보인다.
4. FULL OUTER JOIN
   - 기준 테이블과 대상 테이블에 상호 매칭하는 필드값이 있는 경우에 검색한다. 그렇지 않으면 공백으로 보인다.

## 1-12. CASE: `조건에 따른 처리와 값 설정하기`

- **조건에 만족하는 결괏값을 반환**
- '조건대상'에 대한 '비굣값'을 WHEN 구문에 지정하고, 조건을 만족할 경우 THEN 구문에서 지정한 '결과'를 반환한다.
- 만약 어떤 조건도 만족하지 않으면 ELSE 구문을 반환한다.
- '조건대상' 없이 WHEN 구문의 조건에 만족하면 THEN 구문의 값을 반환하기도 한다.

### 구문

```sql
-- 구문 1)
CASE 조건대상 WHEN 비굣값1 THEN 결과1
            WHEN 비굣값2 THEN 결과2
            ...
            WHEN 비굣값n THEN 결과n
            ELSE 결과가 없을 때
END


-- 구문 2)
CASE WHEN 조건식1 THEN 결과1
     WHEN 조건식2 THEN 결과2
     ...
     WHEN 조건식n THEN 결과n
     ELSE 결과가 없을 때
END
```

### 예시

```sql
-- 점수로 등급 나누기
SELECT CLASS_CD,
       STUDENT_NAME,
       CASE WHEN AVG_SCORE <= 100 AND AVG_SCORE >= 90 THEN '1등급'
            WHEN AVG_SCORE < 90 AND AVG_SCORE >= 80 THEN '2등급',
            WHEN AVG_SCORE < 80 AND AVG_SCORE >= 70 THEN '3등급',
            ELSE '등급없음'
        END AS STUDENT_GRADE
FROM STUDENT_TEST_RESULT


-- 알파벳으로 된 반코드를 다른 이름으로 바꾸기
SELECT CASE CLASS_CD WHEN 'A' THEN '과학고 대비반'
                     WHEN 'B' THEN '외고 대비반'
                     WHEN 'C' THEN '일반고 대비반'
       END AS CLASS_NAME,
       STUDENT_NAME
FROM ACADEMY_INFO
```

## 1-13. ROWNUM: `행 번호 구하기`

- 레코드를 검색할 때 생성되는 행 번호를 구한다.
  - 행 번호는 항상 1부터 시작된다.

### 구문

```sql
SELECT ROWNUM,
       NAME,
       AGE,
       GENDER
       BIRTHDAY
FROM CUSTOMER_INFO


-- 위의 식을 더 간단히 만드는 방법
SELECT ROWNUM, A.*
FROM CUSTOMER_INFO A;
```

## 1-14. NULL: `값이 없는 상태`

- **필드에 할당된 값이 없는 상태**
  - `IS NULL` 명령은 값이 없는 데이터를 검색한다.
  - `IS NOT NULL`은 값이 있는 데이터를 검색할 때 사용한다.
- NULL은 아무것도 정해지지 않은 상태로 미지의 값이라고 부르기도 한다.

### 구문

```sql
SELECT 검색필드명
FROM 테이블명
WHERE 필드명 IS [NOT] NULL
```

### 예시

```sql
-- 이메일 필드에 값이 없으면 검색한다.
SELECT *
FROM CUSTOMER
WHERE EMAIL IS NULL


-- 이메일 필드에 값이 있으면 검색한다.
SELECT *
FROM CUSTOMER
WHERE EMAIL IS NOT NULL
```

## 1-15. ?

### 구문

```sql

```

### 예시

```sql

```
