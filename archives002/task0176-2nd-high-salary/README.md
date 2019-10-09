# Second Highest Salary

\<Easy>

SQL Schema:

```sql
CREATE TABLE IF NOT EXISTS Employee (Id INT, Salary INT);
TRUNCATE TABLE Employee
INSERT INTO Employee (Id, Salary) VALUES ('1', '100')
INSERT INTO Employee (Id, Salary) VALUES ('2', '200')
INSERT INTO Employee (Id, Salary) VALUES ('3', '300')
```

Write a SQL query to get the second highest salary from the Employee table.

```
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
```

For example, given the above `Employee` table, the query should return `200` as
the second highest salary. If there is no second highest salary, then the query
should return `null`.

```
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
```