-- Exercise 1
SELECT
	CONCAT(employees_staff.FIRST_NAME, " ", employees_staff.LAST_NAME)
		AS staffer_name,
	CONCAT(employees_managers.FIRST_NAME, " ", employees_managers.LAST_NAME)
		AS manager_name
FROM hr.employees AS employees_staff
INNER JOIN hr.employees AS employees_managers
ON employees_staff.MANAGER_ID = employees_managers.EMPLOYEE_ID
WHERE employees_staff.DEPARTMENT_ID <> employees_managers.DEPARTMENT_ID;

-- Exercise 2
SELECT
	CONCAT(employees_managers.FIRST_NAME, " ", employees_managers.LAST_NAME)
		AS manager_name,
	COUNT(*) AS staff_size
FROM hr.employees AS employees_staff
INNER JOIN hr.employees AS employees_managers
ON employees_staff.MANAGER_ID = employees_managers.EMPLOYEE_ID
GROUP BY manager_name
ORDER BY staff_size DESC;
