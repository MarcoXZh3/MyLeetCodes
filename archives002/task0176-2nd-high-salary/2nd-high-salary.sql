-- Task 0176 - <SQL> Second Highest Salary
SELECT
(
  SELECT
    DISTINCT
    e.Salary
  FROM Employee AS e WITH (NOLOCK)
  ORDER BY
    e.Salary DESC
  OFFSET 1 ROW
  FETCH NEXT 1 ROW ONLY
) AS SecondHighestSalary
;
