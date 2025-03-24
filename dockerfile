# Use the official Node.js 22 image from Docker Hub
FROM node:22

# Create a directory to hold the application code inside the image
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "./bin/www"]