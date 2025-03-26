-- Create the Students table
CREATE TABLE Students
(
  StudentID SERIAL PRIMARY KEY,
  StudentName VARCHAR(100) NOT NULL,
  Email VARCHAR(100) UNIQUE NOT NULL
);

-- Create the Courses table
CREATE TABLE Courses
(
  CourseID SERIAL PRIMARY KEY,
  CourseName VARCHAR(100) NOT NULL
);

-- Create the junction table to handle the many-to-many relationship
CREATE TABLE StudentCourses
(
  StudentID INT,
  CourseID INT,
  PRIMARY KEY (StudentID, CourseID),
  CONSTRAINT fk_student
        FOREIGN KEY (StudentID)
        REFERENCES Students (StudentID)
        ON DELETE CASCADE,
  CONSTRAINT fk_course
        FOREIGN KEY (CourseID)
        REFERENCES Courses (CourseID)
        ON DELETE CASCADE
);

/* 
### Explanation of the SQL Statements:

1. **Students Table**:
   - `StudentID`: An auto-incrementing primary key that uniquely identifies each student.
   - `StudentName`: A variable character string that stores the student's name.
   - `Email`: A unique email address for each student.

2. **Courses Table**:
   - `CourseID`: An auto-incrementing primary key that uniquely identifies each course.
   - `CourseName`: The name of the course.

3. **StudentCourses Junction Table**:
   - This table handles the many-to-many relationship between students and courses.
   - `StudentID` and `CourseID`: Both are foreign keys that link back to their respective tables.
   - The combination of `StudentID` and `CourseID` serves as a composite primary key to ensure that each combination is unique, preventing duplicate enrollments.
   - `CONSTRAINT fk_student` and `CONSTRAINT fk_course`: These are foreign key constraints that ensure integrity by linking to primary keys of the `Students` and `Courses` tables, respectively. The `ON DELETE CASCADE` option ensures that if a student or course is deleted, the corresponding entries in the `StudentCourses` table are also automatically deleted, maintaining data integrity.
*/