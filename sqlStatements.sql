/* Example 1: Update a User’s Email Address */
UPDATE users
SET email = 'new.email@example.com'
WHERE user_id = 1;


/* Example 2: Deactivate a User Account */
UPDATE users
SET is_active = FALSE
WHERE user_id = 2;


/* Example 1: Delete a User by User ID */
DELETE FROM users
WHERE user_id = 3;


/* Example 2: Delete All Inactive Users */
DELETE FROM users
WHERE is_active = FALSE;
