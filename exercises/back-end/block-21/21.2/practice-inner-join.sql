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

-- Exercise 3
SELECT
	sakila.customer.customer_id,
    sakila.customer.first_name,
    sakila.customer.email,
    sakila.address.address_id,
    sakila.address.address
FROM sakila.customer
INNER JOIN sakila.address
ON sakila.customer.address_id = sakila.address.address_id
ORDER BY sakila.customer.first_name DESC
LIMIT 100;

-- Exercise 4
SELECT
	sakila.customer.first_name,
    sakila.customer.email,
    sakila.customer.address_id,
    sakila.address.address,
    sakila.address.district
FROM sakila.customer
INNER JOIN sakila.address
ON sakila.customer.address_id = sakila.address.address_id
WHERE sakila.address.district = 'California'
AND sakila.customer.first_name LIKE '%rene%';

-- Exercise 5
SELECT
    sakila.customer.first_name,
    COUNT(sakila.address.address)
FROM sakila.customer
INNER JOIN sakila.address
ON sakila.address.address_id = sakila.customer.address_id
WHERE sakila.customer.active = 1
GROUP BY sakila.customer.customer_id
ORDER BY first_name DESC, last_name DESC;

-- Exercise 6
SELECT
	sakila.staff.first_name,
    sakila.staff.last_name,
    AVG(sakila.payment.amount)
FROM sakila.staff
INNER JOIN sakila.payment
ON sakila.payment.staff_id = sakila.staff.staff_id
WHERE YEAR(sakila.payment.payment_date) = 2006
GROUP BY sakila.staff.staff_id;

-- Exercise 7
SELECT
	sakila.actor.actor_id,
    sakila.actor.first_name,
    sakila.film_actor.film_id,
    sakila.film.title
FROM sakila.actor
INNER JOIN sakila.film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id
INNER JOIN sakila.film
ON sakila.film_actor.film_id = sakila.film.film_id;
