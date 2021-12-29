-- Exercise 1
SELECT `active`, COUNT(*)
FROM sakila.customer
GROUP BY `active`;
