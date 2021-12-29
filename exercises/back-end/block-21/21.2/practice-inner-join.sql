-- Exercise 1
SELECT
	sakila.actor.actor_id,
    CONCAT(
    sakila.actor.first_name,
    ' ',
    sakila.actor.last_name
    ) AS actor_name,
    sakila.film_actor.film_id
FROM sakila.actor
INNER JOIN sakila.film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id;
