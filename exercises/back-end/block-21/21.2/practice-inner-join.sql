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

-- Exercise 2
SELECT
	sakila.staff.first_name,
    sakila.staff.last_name,
    sakila.address.address
FROM sakila.staff
INNER JOIN sakila.address
ON sakila.staff.address_id = sakila.address.address_id;
