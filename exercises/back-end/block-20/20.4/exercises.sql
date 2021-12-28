-- Exercise 1
INSERT INTO Pixar.Movies (title, director, `year`, length_minutes) VALUES
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

-- Exercise 2
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
SELECT id, 6.8, 450000000, 370000000
FROM Pixar.Movies
WHERE title = 'Procurando Nemo';

-- Exercise 3
SET SQL_SAFE_UPDATES = 0;
UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';

-- Exercise 4
UPDATE Pixar.Movies
SET title = 'Ratatouille', `year` = 2007
WHERE title = 'ratatui';

-- Exercise 5
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
(
  SELECT id, 8.5, 300000000, 250000000
  FROM Pixar.Movies
  WHERE title = 'Monstros SA'
)
UNION
(
  SELECT id, 7.4, 460000000, 510000000
  FROM Pixar.Movies
  WHERE title = 'Os Incríveis'
)
UNION
(
  SELECT id, 9.9, 290000000, 280000000
  FROM Pixar.Movies
  WHERE title = 'WALL-E'
);

-- Exercise 6
DELETE FROM Pixar.BoxOffice WHERE movie_id IN (
	SELECT id FROM Pixar.Movies WHERE title = 'WALL-E'
);

DELETE FROM Pixar.Movies WHERE title = 'WALL-E';

-- Exercise 7
DELETE FROM Pixar.BoxOffice WHERE movie_id IN (
	SELECT id FROM Pixar.Movies WHERE director = 'Andrew Staton'
);

DELETE FROM Pixar.Movies WHERE director = 'Andrew Staton';
