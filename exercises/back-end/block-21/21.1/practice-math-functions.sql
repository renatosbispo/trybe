-- DIV/MOD challenge 1
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou ímpar';

-- DIV/MOD challenge 2
SELECT 220 DIV 12;

-- DIV/MOD challenge 3
SELECT IF(220 MOD 12 > 0, CONCAT('Sim, ', 220 MOD 12), 'Não') AS 'Lugares sobrando';

-- Exercise 1
SELECT ROUND(15 + (RAND() * 5));

-- Exercise 2
SELECT ROUND(15.7515971, 5);
