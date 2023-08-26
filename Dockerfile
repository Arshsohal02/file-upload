# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies (you can change the package manager if needed)
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose a port (modify this based on your app's requirements)
EXPOSE 3000

# Define the command to start your application (modify this based on your app's entry point)
CMD [ "node", "server.js" ]
