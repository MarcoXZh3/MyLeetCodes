-- Task 0180 - <SQL> Consecutive Numbers
SELECT
  DISTINCT
  l1.Num AS ConsecutiveNums
FROM
  Logs AS l1 WITH (NOLOCK),
  Logs AS l2 WITH (NOLOCK),
  Logs AS l3 WITH (NOLOCK)
WHERE
  l1.Num = l2.Num AND l1.Id + 1 = l2.Id AND
  l2.Num = l3.Num AND l2.Id + 1 = l3.Id
;
