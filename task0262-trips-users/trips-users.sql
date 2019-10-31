-- Task 0262 - <SQL> Trips and Users
SELECT
  t.Request_at    AS [Day],
  CAST
  (
    ROUND(SUM(IIF(t.[Status] <> 'completed', 1.0, 0.0)) / COUNT(*), 2)
    AS NUMERIC(10, 2)
  )               AS [Cancellation Rate]
FROM Trips AS t WITH (NOLOCK)
INNER JOIN Users AS c WITH (NOLOCK) ON c.Users_Id = t.Client_Id AND c.Banned = 'No'
INNER JOIN Users AS d WITH (NOLOCK) ON d.Users_Id = t.Driver_Id AND d.Banned = 'No'
WHERE
  Request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY
  Request_at
;
