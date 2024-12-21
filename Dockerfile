# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies using Yarn
RUN npm install 

# Copy the rest of the project files to the working directory
COPY . .

# Expose the desired port (e.g., 3000) for the Next.js application
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]