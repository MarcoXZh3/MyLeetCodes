# Duplicate Emails

\<Easy>

SQL Schema:

```sql
CREATE TABLE IF NOT EXISTS Person (Id INT, Email VARCHAR(255))
TRUNCATE TABLE Person
INSERT INTO Person (Id, Email) VALUES ('1', 'a@b.com')
INSERT INTO Person (Id, Email) VALUES ('2', 'c@d.com')
INSERT INTO Person (Id, Email) VALUES ('3', 'a@b.com')
```

Write a SQL query to find all duplicate emails in a table named `Person`.

```
+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
```
For example, your query should return the following for the above table:

```
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
```
Note: All emails are in lowercase.
