CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

/* user_id: A unique identifier for each user. The SERIAL data type is used in PostgreSQL to auto-increment integers, making it suitable for primary keys.

first_name and last_name: These fields store the user's first and last names, respectively. VARCHAR(50) allows string data up to 50 characters long.

email: This field is intended to store the user's email address. It is marked as UNIQUE to ensure no two users can have the same email, and NOT NULL to ensure every user record has an email address.

age: This integer field stores the user's age. The CHECK constraint ensures that no user under the age of 18 can be entered into the database.

registration_date: This timestamp records the date and time when the user registered. TIMESTAMP WITH TIME ZONE is used to include timezone data with the timestamp. The DEFAULT CURRENT_TIMESTAMP sets the registration time to the time when the user record is created.

is_active: A Boolean field that indicates whether the user's account is active. It defaults to TRUE.

 */