CREATE DATABASE IF NOT EXISTS products_api;

USE products_api;

CREATE TABLE IF NOT EXISTS  products
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    production_date DATE NOT NULL,
    expiration_date DATE NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO products (name, brand, price, production_date, expiration_date)
VALUES ('Leite Integral', 'Italac', 4.49, '2022-03-03', '2022-07-01'),
    ('Nescau Light', 'Nestlé', 8.59, '2021-10-12', '2022-11-01'),
    ('Ketchup Tradicional', 'Quero', 2.75, '2021-08-04', '2023-12-31'),
    ('Iogurte Natural', 'Nestlé', 2.69, '2022-01-19', '2022-03-05');