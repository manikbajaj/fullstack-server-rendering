-- Insert data into the Students table
INSERT INTO Students
  (StudentName, Email)
VALUES
  ('John Doe', 'john.doe@example.com'),
  ('Jane Smith', 'jane.smith@example.com');

-- Insert data into the Courses table
INSERT INTO Courses
  (CourseName)
VALUES
  ('Mathematics'),
  ('Science');

-- Insert data into the StudentCourses junction table
-- Assuming StudentID and CourseID start from 1
INSERT INTO StudentCourses
  (StudentID, CourseID)
VALUES
  (1, 1),
  (1, 2),
  (2, 1);

SELECT s.StudentName, c.CourseName
FROM Students s
  JOIN StudentCourses sc ON s.StudentID = sc.StudentID
  JOIN Courses c ON sc.CourseID = c.CourseID;
