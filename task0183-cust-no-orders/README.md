# Customers Who Never Order

\<Easy>

SQL Schema:

```sql
CREATE TABLE IF NOT EXISTS Customers (Id INT, [Name] VARCHAR(255))
CREATE TABLE IF NOT EXISTS Orders (Id INT, CustomerId INT)
TRUNCATE TABLE Customers
INSERT INTO Customers (Id, [Name]) VALUES ('1', 'Joe')
INSERT INTO Customers (Id, [Name]) VALUES ('2', 'Henry')
INSERT INTO Customers (Id, [Name]) VALUES ('3', 'Sam')
INSERT INTO Customers (Id, [Name]) VALUES ('4', 'Max')
TRUNCATE TABLE Orders
INSERT INTO Orders (Id, CustomerId) VALUES ('1', '3')
INSERT INTO Orders (Id, CustomerId) VALUES ('2', '1')
```

Suppose that a website contains two tables, the `Customers` table and the
`Orders` table. Write a SQL query to find all customers who never order anything.

```
Customers           Orders
+----+-------+      +----+------------+
| Id | Name  |      | Id | CustomerId |
+----+-------+      +----+------------+
| 1  | Joe   |      | 1  | 3          |
| 2  | Henry |      | 2  | 1          |
| 3  | Sam   |      +----+------------+
| 4  | Max   |
+----+-------+
```

Using the above tables as example, return the following:

```
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
```
