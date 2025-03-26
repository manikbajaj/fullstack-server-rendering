-- Insert authors into the Authors table
INSERT INTO Authors
  (AuthorName, Email)
VALUES
  ('Alice Munro', 'alice.munro@example.com'),
  ('Gabriel Garcia ', 'gabriel@example.com');


-- Insert books into the Books table
-- Note: Ensure you know the AuthorID either by query or assumption based on insertion order
INSERT INTO Books
  (AuthorID, Title, PublicationYear)
VALUES
  (1, 'Dear Life', 2012),
  (1, 'Runaway', 2004),
  (2, 'One Hundred Years of Solitude', 1967),
  (2, 'Love in the Time of Cholera', 1985);

-- Select all authors and their corresponding books
SELECT a.AuthorName, a.Email, b.Title, b.PublicationYear
FROM Authors a
  JOIN Books b ON a.AuthorID = b.AuthorID
ORDER BY a.AuthorName, b.PublicationYear;
