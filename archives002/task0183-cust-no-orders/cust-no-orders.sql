-- Task 0183 - <SQL> Customers Who Never Order
SELECT
  c.Name AS Customers
FROM Customers AS c WITH (NOLOCK)
LEFT JOIN Orders AS o WITH (NOLOCK) ON c.Id = o.CustomerId
WHERE
  o.Id IS NULL
;
