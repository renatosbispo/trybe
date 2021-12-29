-- Exercise 1
SELECT MAX(SALARY) FROM hr.employees;

-- Exercise 2
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

-- Exercise 3
SELECT JOB_ID, AVG(SALARY)
FROM hr.employees
GROUP BY JOB_ID
ORDER BY AVG(SALARY) DESC;

-- Exercise 4
SELECT SUM(SALARY)
FROM hr.employees;

-- Exercise 5
SELECT
	ROUND(MAX(SALARY), 2),
    ROUND(MIN(SALARY), 2),
    ROUND(SUM(SALARY), 2),
    ROUND(AVG(SALARY), 2)
FROM hr.employees;
