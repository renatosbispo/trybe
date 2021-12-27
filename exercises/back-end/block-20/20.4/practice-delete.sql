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
