-- Task 0175 - <SQL> Combine Two Tables
SELECT
  p.FirstName,
  p.LastName,
  a.City,
  a.State
FROM Person AS p WITH (NOLOCK)
LEFT JOIN [Address] AS a WITH (NOLOCK) ON p.PersonId = a.PersonId
;
