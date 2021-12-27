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

-- 4. Update the rental rate to $10 for movies with a length between 0 and 100,
--    and to $20 for movies with a length greater than 100.
UPDATE sakila.film
SET rental_rate = (
  CASE
    WHEN length BETWEEN 0 AND 100 THEN 10.00
    WHEN length > 100 THEN 20.00
  END
);
