-- Task 0182 - <SQL> Duplicate Emails
SELECT
  Email
FROM Person WITH (NOLOCK)
GROUP BY
  Email
HAVING COUNT(Email) > 1
;
