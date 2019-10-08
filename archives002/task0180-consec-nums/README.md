# Consecutive Numbers

\<Medium>

SQL Schema:

```sql
CREATE TABLE IF NOT EXISTS Logs (Id INT, Num INT)
TRUNCATE TABLE Logs
INSERT INTO Logs (Id, Num) VALUES ('1', '1')
INSERT INTO Logs (Id, Num) VALUES ('2', '1')
INSERT INTO Logs (Id, Num) VALUES ('3', '1')
INSERT INTO Logs (Id, Num) VALUES ('4', '2')
INSERT INTO Logs (Id, Num) VALUES ('5', '1')
INSERT INTO Logs (Id, Num) VALUES ('6', '2')
INSERT INTO Logs (Id, Num) VALUES ('7', '2')
```

Write a SQL query to find all numbers that appear at least three times
consecutively.

```
+----+-----+
| Id | Num |
+----+-----+
| 1  |  1  |
| 2  |  1  |
| 3  |  1  |
| 4  |  2  |
| 5  |  1  |
| 6  |  2  |
| 7  |  2  |
+----+-----+
```
For example, given the above `Logs` table, `1` is the only number that appears
consecutively for at least three times.

```
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
```
