-- 1. Add new employee to sakila.staff.
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
VALUES ('Elon', 'Musk', 5, 2, 'Elon');

-- 2. Insert two new employees to sakila.staff with a single query.
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES
('Jared', 'Isaacman', 6, 1, 'Jared'),
('Hayley', 'Arceneaux', 7, 2, 'Hayley');
