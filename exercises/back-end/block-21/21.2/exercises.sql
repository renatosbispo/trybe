-- Exercise 1
SELECT
	Pixar.Movies.id,
    Pixar.Movies.title,
    Pixar.BoxOffice.domestic_sales,
    Pixar.BoxOffice.international_sales
FROM Pixar.Movies
INNER JOIN Pixar.BoxOffice
ON Pixar.Movies.id = Pixar.BoxOffice.movie_id;

-- Exercise 2
SELECT
	Pixar.Movies.id,
    Pixar.Movies.title,
    Pixar.BoxOffice.domestic_sales +
	Pixar.BoxOffice.international_sales AS total_sales
FROM Pixar.Movies
INNER JOIN Pixar.BoxOffice
ON Pixar.Movies.id = Pixar.BoxOffice.movie_id
WHERE Pixar.BoxOffice.international_sales > Pixar.BoxOffice.domestic_sales;

-- Exercise 3
SELECT
	Pixar.Movies.title,
    Pixar.BoxOffice.rating
FROM Pixar.Movies
INNER JOIN Pixar.BoxOffice
ON Pixar.Movies.id = Pixar.BoxOffice.movie_id
ORDER BY Pixar.BoxOffice.rating DESC;

-- Exercise 4
SELECT
    Pixar.Theater.name,
    Pixar.Theater.location,
	Pixar.Movies.title,
    Pixar.Movies.director,
    Pixar.Movies.year,
    Pixar.Movies.length_minutes
FROM Pixar.Theater
LEFT JOIN Pixar.Movies
ON Pixar.Theater.id = Pixar.Movies.theater_id
ORDER BY Pixar.Theater.name ASC;
