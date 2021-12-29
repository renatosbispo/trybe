-- Exercise 1
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou ímpar';

-- Exercise 2
SELECT 220 DIV 12;

-- Exercise 3
SELECT IF(220 MOD 12 > 0, CONCAT('Sim, ', 220 MOD 12), 'Não') AS 'Lugares sobrando';
