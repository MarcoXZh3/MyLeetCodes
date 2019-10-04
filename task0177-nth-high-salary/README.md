# Nth Highest Salary

\<Medium>

SQL Schema:

```sql
CREATE TABLE IF NOT EXISTS Employee (Id INT, Salary INT);
TRUNCATE TABLE Employee
INSERT INTO Employee (Id, Salary) VALUES ('1', '100')
INSERT INTO Employee (Id, Salary) VALUES ('2', '200')
INSERT INTO Employee (Id, Salary) VALUES ('3', '300')
```

Write a SQL query to get the nth highest salary from the Employee table.
```
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
```
For example, given the above `Employee` table, the nth highest salary where
`n = 2` is `200`. If there is no nth highest salary, then the query should
return `null`.

```
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
```
