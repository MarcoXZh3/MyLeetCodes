-- Task 0185 - <SQL> Department Top Three Salaries
WITH ranks AS
(
  SELECT
    d.Id,
    d.Name,
    e.Salary,
    DENSE_RANK() OVER (PARTITION BY d.Id ORDER BY e.Salary DESC) AS rank
  FROM Employee AS e WITH (NOLOCK)
  INNER JOIN Department AS d WITH (NOLOCK) ON e.DepartmentId = d.Id
)
SELECT
  DISTINCT
  r.Name    AS Department,
  e.Name    AS Employee,
  e.Salary
FROM ranks AS r
INNER JOIN Employee AS e WITH (NOLOCK) ON r.Id = e.DepartmentId
                                      AND e.Salary = r.Salary
WHERE
  r.rank <= 3
ORDER BY
  r.Name,
  e.Salary DESC,
  e.Name
;
