-- Insert data into the Person table
INSERT INTO Person (FullName, DateOfBirth, Email)
VALUES ('John Doe', '1985-07-04', 'john.doe@example.com');

-- Insert data into the Passport table
-- Assuming John Doe's PersonID is 1 (this should be checked or retrieved in a real scenario)
INSERT INTO Passport (PersonID, PassportNumber, IssuingCountry, ExpiryDate)
VALUES (1, 'A12345678', 'USA', '2030-01-01');


-- Query to select person and their passport details
SELECT p.FullName, p.DateOfBirth, p.Email, pa.PassportNumber, pa.IssuingCountry, pa.ExpiryDate
FROM Person p
JOIN Passport pa ON p.PersonID = pa.PersonID;

/* 
1. SELECT Clause: This part of the query specifies the columns to be retrieved:

p.FullName, p.DateOfBirth, p.Email: These columns come from the Person table and include the person's full name, date of birth, and email address.

pa.PassportNumber, pa.IssuingCountry, pa.ExpiryDate: These columns come from the Passport table and include the passport number, the country that issued the passport, and the passport's expiry date.

2. FROM Clause: This specifies the primary table from which to retrieve the data, which in this case is the Person table, aliased as p for easier reference in the query.

3. JOIN Clause: This is used to specify how to retrieve data that spans multiple tables. In this case, it performs an inner join of the Person table with the Passport table:

JOIN Passport pa ON p.PersonID = pa.PersonID: This condition joins the Person table to the Passport table using the PersonID field. The Passport table is aliased as pa. The join condition ensures that only those records where the PersonID in both tables matches are selected. This reflects the one-to-one relationship where each person has exactly one passport and each passport is associated with exactly one person. */