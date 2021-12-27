-- 1. Delete the actor named 'KARL'.
DELETE FROM sakila.film_actor WHERE actor_id IN (
	SELECT actor_id FROM sakila.actor WHERE first_name = 'KARL'
);

DELETE FROM sakila.actor WHERE first_name = 'KARL';

-- 2. Delete the actors named 'MATTHEW'.
DELETE FROM sakila.film_actor WHERE actor_id IN (
	SELECT actor_id FROM sakila.actor WHERE first_name = 'MATTHEW'
);

DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';

-- 3. Delete from sakila.film_text every entry where the description contains
--    the word 'saga'.
DELETE FROM sakila.film_text WHERE description LIKE '%saga%';

-- 4. Delete every entry in sakila.film_actor and sakila.film_category.
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
