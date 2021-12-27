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
