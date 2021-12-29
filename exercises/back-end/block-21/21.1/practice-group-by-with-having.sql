-- Exercise 1
SELECT rating, AVG(length) as avg_length
FROM sakila.film
GROUP BY rating
HAVING avg_length BETWEEN 115 AND 121.5
ORDER BY avg_length DESC;
