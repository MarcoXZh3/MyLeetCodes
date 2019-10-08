# Rising Temperature

\<Easy>

SQL Schema:

```sql
CREATE TABLE IF NOT EXISTS Weather (Id INT, RecordDate DATE, Temperature INT)
TRUNCATE TABLE Weather
INSERT INTO Weather (Id, RecordDate, Temperature) VALUES ('1', '2015-01-01', '10')
INSERT INTO Weather (Id, RecordDate, Temperature) VALUES ('2', '2015-01-02', '25')
INSERT INTO Weather (Id, RecordDate, Temperature) VALUES ('3', '2015-01-03', '20')
INSERT INTO Weather (Id, RecordDate, Temperature) VALUES ('4', '2015-01-04', '30')
```

Given a `Weather` table, write a SQL query to find all dates' `Id`s with higher
temperature compared to its previous (yesterday's) dates.

```
+---------+------------------+------------------+
| Id(INT) | RecordDate(DATE) | Temperature(INT) |
+---------+------------------+------------------+
|       1 |       2015-01-01 |               10 |
|       2 |       2015-01-02 |               25 |
|       3 |       2015-01-03 |               20 |
|       4 |       2015-01-04 |               30 |
+---------+------------------+------------------+
```

For example, return the following `Id`s for the above `Weather` table:

```
+----+
| Id |
+----+
|  2 |
|  4 |
+----+
```
