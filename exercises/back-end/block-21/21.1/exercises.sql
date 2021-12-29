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

-- Exercise 6
SELECT JOB_ID , COUNT(*)
FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- Exercise 7
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;

-- Exercise 8
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Exercise 9
SELECT JOB_ID, AVG(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY AVG(SALARY) DESC;

-- Exercise 10
SELECT department_id, AVG(SALARY), COUNT(*)
FROM hr.employees
GROUP BY department_id
HAVING COUNT(*) > 10;

-- Exercise 11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

-- Exercise 12
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(FIRST_NAME) > 7;

-- Exercise 13
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;

-- Exercise 14
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;

-- Exercise 15
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

-- Exercise 16
SELECT CONCAT(UCASE(FIRST_NAME), ' ', UCASE(LAST_NAME)) FROM hr.employees;

-- Exercise 17
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE HIRE_DATE LIKE '1987-07%';
