-- 우유와 요거트가 담긴 장바구니 | X
-- 일단 CART_ID로 묶은 후, 중복을 제거해서 그 개수가 2라면 우유와 요거트 둘다 포함된다는 뜻이다. 
SELECT CART_ID
  FROM CART_PRODUCTS
 WHERE NAME IN ('Milk','Yogurt')
 GROUP BY CART_ID
--  DISTINCT로 중복 제거 후 COUNT를 센다.
 HAVING COUNT(DISTINCT NAME) = 2