# Combine Two Tables

\<Easy>

SQL Schema:

```sql
CREATE TABLE Person (
  PersonId  INT,
  FirstName VARCHAR(255),
  LastName  VARCHAR(255)
);
CREATE TABLE [Address] (
  AddressId INT,
  PersonId  INT,
  City      VARCHAR(255),
  [State]   VARCHAR(255)
);
TRUNCATE TABLE Person
INSERT INTO Person (PersonId, LastName, FirstName)
VALUES ('1', 'Wang', 'Allen')
TRUNCATE TABLE [Address]
INSERT INTO [Address] (AddressId, PersonId, City, [State])
VALUES ('1', '2', 'New York City', 'New York')
```

Tables:
```
Person:                       Address:
+-------------+---------+     +-------------+---------+
| Column Name | Type    |     | Column Name | Type    |
+-------------+---------+     +-------------+---------+
| PersonId    | int     |     | AddressId   | int     |
| FirstName   | varchar |     | PersonId    | int     |
| LastName    | varchar |     | City        | varchar |
+-------------+---------+     | State       | varchar |
                              +-------------+---------+
`PersonId` and `AddressId` are the primary keys
```

Write a SQL query for a report that provides the following information for each
person in the `Person` table, regardless if there is an address for each of
those people:
```
FirstName, LastName, City, State
```
