-- Create the Person table
CREATE TABLE Person (
    PersonID SERIAL PRIMARY KEY,
    FullName VARCHAR(100) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL
);

-- Create the Passport table
CREATE TABLE Passport (
    PassportID SERIAL PRIMARY KEY,
    PersonID INT UNIQUE NOT NULL,
    PassportNumber VARCHAR(50) UNIQUE NOT NULL,
    IssuingCountry VARCHAR(50) NOT NULL,
    ExpiryDate DATE NOT NULL,
    CONSTRAINT fk_person
        FOREIGN KEY (PersonID)
        REFERENCES Person (PersonID)
        ON DELETE CASCADE
);
