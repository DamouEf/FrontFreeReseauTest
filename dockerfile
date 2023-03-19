# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-slim

# Set the working directory.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code to the container.
COPY . .

# Build the application.
RUN npm run build

# Expose the port that the application will be running on.
EXPOSE 3000

# Start the application.
CMD ["npm", "start"]
