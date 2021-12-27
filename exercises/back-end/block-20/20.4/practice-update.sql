-- 1. Update the first name of everyone in sakila.actor named 'JULIA'
--    to 'JULES'.
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 2. Update the category 'Sci-Fi' to 'Science Fiction'.
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- 3. Update the rental rate to $25 for every movie with a length greater than
--    100, ratings 'G', 'PG' or 'PG-13' and replacement cost greater than $20.
UPDATE sakila.film
SET rental_rate = 25.00
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20
