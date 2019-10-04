-- Task 0197 - <SQL> Rising Temperature
SELECT
  t2.Id
FROM
  Weather AS t1 WITH (NOLOCK),
  Weather AS t2 WITH (NOLOCK)
WHERE
  DATEADD(DD, 1, t1.RecordDate) = t2.RecordDate AND
  t2.Temperature > t1.Temperature
;
