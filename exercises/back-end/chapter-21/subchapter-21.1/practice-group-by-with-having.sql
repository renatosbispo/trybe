-- Exercise 1
SELECT rating, AVG(length) as avg_length
FROM sakila.film
GROUP BY rating
HAVING avg_length BETWEEN 115 AND 121.5
ORDER BY avg_length DESC;

-- Exercise 2
SELECT rating, SUM(replacement_cost) AS total_replacement_cost
FROM sakila.film
GROUP BY rating
HAVING total_replacement_cost > 3950.5
ORDER BY total_replacement_cost ASC;
