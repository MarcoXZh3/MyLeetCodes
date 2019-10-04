# Department Highest Salary

\<Medium>

SQL Schema:

```sql
CREATE TABLE IF NOT EXISTS Employee (Id INT, [Name] VARCHAR(255), Salary INT, DepartmentId INT)
CREATE TABLE IF NOT EXISTS Department (Id INT, [Name] VARCHAR(255))
TRUNCATE TABLE Employee
INSERT INTO Employee (Id, [Name], Salary, DepartmentId) VALUES ('1', 'Joe', '70000', '1')
INSERT INTO Employee (Id, [Name], Salary, DepartmentId) VALUES ('2', 'Jim', '90000', '1')
INSERT INTO Employee (Id, [Name], Salary, DepartmentId) VALUES ('3', 'Henry', '80000', '2')
INSERT INTO Employee (Id, [Name], Salary, DepartmentId) VALUES ('4', 'Sam', '60000', '2')
INSERT INTO Employee (Id, [Name], Salary, DepartmentId) VALUES ('5', 'Max', '90000', '1')
Truncate table Department
INSERT INTO Department (Id, [Name]) VALUES ('1', 'IT')
INSERT INTO Department (Id, [Name]) VALUES ('2', 'Sales')
```

The `Employee` table holds all employees. Every employee has an `Id`, a `Salary`,
and there is also a column for the department Id.

```
Employee                                  Department
+----+-------+--------+--------------+    +----+----------+
| Id | Name  | Salary | DepartmentId |    | Id | Name     |
+----+-------+--------+--------------+    +----+----------+
| 1  | Joe   | 70000  | 1            |    | 1  | IT       |
| 2  | Jim   | 90000  | 1            |    | 2  | Sales    |
| 3  | Henry | 80000  | 2            |    +----+----------+
| 4  | Sam   | 60000  | 2            |
| 5  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
```

Write a SQL query to find employees who have the highest salary in each of the
departments. For the above tables, your SQL query should return the following
rows (order of rows does not matter).

```
+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Jim      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+
```

Explanation: Max and Jim both have the highest salary in the IT department and
Henry has the highest salary in the Sales department.
