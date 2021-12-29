-- Exercise 1
SELECT `active`, COUNT(*)
FROM sakila.customer
GROUP BY `active`;

-- Exercise 2
SELECT store_id, `active`, COUNT(*)
FROM sakila.customer
GROUP BY store_id, `active`
ORDER BY store_id ASC;
