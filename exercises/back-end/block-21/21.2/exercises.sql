-- Exercise 1
SELECT
	Pixar.Movies.id,
    Pixar.Movies.title,
    Pixar.BoxOffice.domestic_sales,
    Pixar.BoxOffice.international_sales
FROM Pixar.Movies
INNER JOIN Pixar.BoxOffice
ON Pixar.Movies.id = Pixar.BoxOffice.movie_id;
