-- Task 0184 - <SQL> Department Highest Salary
WITH maxSalaries AS (
  SELECT
    d.Id,
    d.Name        AS Department,
    MAX(e.Salary) AS Salary
  FROM Employee AS e WITH (NOLOCK)
  INNER JOIN Department AS d WITH (NOLOCK) ON e.DepartmentId = d.Id
  GROUP BY
    d.Id,
    d.Name
)
SELECT
  ms.Department,
  e.Name  AS Employee,
  ms.Salary
FROM Employee AS e WITH (NOLOCK)
INNER JOIN maxSalaries AS ms WITH (NOLOCK) ON ms.Id = e.DepartmentId
                                          AND e.Salary = ms.Salary
;
