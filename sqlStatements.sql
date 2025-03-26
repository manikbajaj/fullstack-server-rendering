-- Create the Authors table
CREATE TABLE Authors (
    AuthorID SERIAL PRIMARY KEY,
    AuthorName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL
);

-- Create the Books table
CREATE TABLE Books (
    BookID SERIAL PRIMARY KEY,
    AuthorID INT NOT NULL,
    Title VARCHAR(255) NOT NULL,
    PublicationYear INT,
    CONSTRAINT fk_authors
        FOREIGN KEY (AuthorID)
        REFERENCES Authors (AuthorID)
        ON DELETE CASCADE
);
