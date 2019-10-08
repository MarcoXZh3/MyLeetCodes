-- Task 0178 - <SQL> Rank Scores
SELECT
  Score,
  DENSE_RANK() OVER (ORDER BY Score DESC) AS [Rank]
FROM Scores WITH (NOLOCK)
;
