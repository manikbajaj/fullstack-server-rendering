const { PrismaClient } = require("./generated/client");

const prisma = new PrismaClient();

async function testDatabaseConnection() {
  try {
    // Attempt to run a query
    await prisma.$connect();
    console.log("Connection successful!");

    // Optionally run a simple read query if you want to test actual data fetching
    // const user = await prisma.user.findFirst();
    // console.log('Test user fetch:', user);

    // If you reach here, the connection and query were successful
    return true;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

// Example usage
testDatabaseConnection()
  .then((result) => console.log("Database connection test result:", result))
  .catch((error) => console.error("Error in database connection test:", error));

module.exports = prisma;
