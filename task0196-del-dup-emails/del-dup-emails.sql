-- Task 0196 - <SQL> Delete Duplicate Emails

-- WITH cnts AS
-- (
--   SELECT
--     ROW_NUMBER() OVER (PARTITION BY Email ORDER BY Id) AS cnt
--   FROM Person WITH (NOLOCK)
-- )
-- DELETE FROM cnts
-- WHERE
--   cnts.cnt > 1
-- ;

DELETE p1 FROM
  Person AS p1 WITH (NOLOCK),
  Person AS p2 WITH (NOLOCK)
WHERE
  p1.Email = p2.Email AND p1.Id > p2.Id
;

SELECT * FROM Person;
