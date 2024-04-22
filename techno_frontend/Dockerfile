# Development Stage
FROM node:20-alpine 
# FROM node:20-alpine AS development

# Set the working directory in the container
WORKDIR /techno_frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for development (if necessary)
EXPOSE 3000

# Command to run the application in development mode
CMD ["npm", "run", "dev"]

################################

# # Production Stage
# FROM node:20-alpine AS production

# # Set the working directory in the container
# WORKDIR /techno_frontend

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install production dependencies only
# RUN npm install 

# # Copy the rest of the application code
# COPY . .

# # Build the React app
# RUN npm run build

# # Serve the built React app using a lightweight web server
# RUN npm install -g serve

# # Expose port for production
# EXPOSE 3000

# # Command to serve the built React app
# CMD ["serve", "-s", "build"]
