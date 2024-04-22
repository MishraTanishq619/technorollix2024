# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /techno_backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# RUN npm install prisma
# RUN npx prisma init
# RUN npm install prisma --save-dev
# RUN npx prisma migrate
# RUN npm install @prisma/client

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN npm run build

RUN npx prisma migrate
RUN npx prisma generate
RUN npx prisma migrate deploy

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]