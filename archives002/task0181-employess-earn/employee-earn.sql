-- Task 0181 - <SQL> Employees Earning More Than Their Managers
SELECT
  e.[Name] AS Employee
FROM Employee AS e WITH (NOLOCK)
INNER JOIN Employee AS m WITH (NOLOCK) ON e.ManagerId = m.Id
WHERE
  e.Salary > m.Salary
;
