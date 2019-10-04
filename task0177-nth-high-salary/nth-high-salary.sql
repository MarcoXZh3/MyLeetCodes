-- Task 0177 - <SQL> Nth Highest Salary
CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
  RETURN
  (
    SELECT
      DISTINCT
      e.Salary
    FROM Employee AS e WITH (NOLOCK)
    ORDER BY
      e.Salary DESC
    OFFSET (@N - 1) ROWS
    FETCH NEXT 1 ROW ONLY
  );
END
