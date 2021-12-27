-- 1. Update the first name of everyone in sakila.actor named 'JULIA'
--    to 'JULES'.
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 2. Update the category 'Sci-Fi' to 'Science Fiction'.
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';