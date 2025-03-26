/* Example 1: Insert a Single User */
INSERT INTO users (first_name, last_name, email, age, is_active)
VALUES ('John', 'Doe', 'john.doe@example.com', 25, TRUE);

/* Example 2: Insert Multiple Users at Once */
INSERT INTO users (first_name, last_name, email, age, is_active)
VALUES 
('Alice', 'Smith', 'alice.smith@example.com', 30, TRUE),
('Bob', 'Johnson', 'bob.johnson@example.com', 20, FALSE);


/* Example 1: Select All Users */
SELECT * FROM users;


/* Example 2: Select Specific Columns */
SELECT first_name, last_name, email FROM users;

/* Example 3: Select Users with a Specific Condition */
SELECT * FROM users WHERE age >= 21;


/* Example: Count of Active Users */
SELECT COUNT(*) FROM users WHERE is_active = TRUE;
