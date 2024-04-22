# Technorollix 2024 Event Portfolio and Management Website

Welcome to Technorollix 2024 Event Portfolio and Management Website repository! This project aims to provide a comprehensive platform for managing and showcasing cultural and technical events, including subevents, for the year 2024.

# Introduction

Technorollix 2024 is an innovative approach to event management, designed to streamline the organization, promotion, and execution of various events. Whether it's cultural festivals, technical workshops, or subevents within larger programs, this platform serves as a centralized hub for everything related to Technorollix 2024.

# Features

Event Management: Easily create, update, and manage events and subevents through an intuitive interface.

Event Portfolio: Showcase all upcoming and past events with detailed descriptions, schedules, and registration information.

Cultural and Technical Integration: Seamlessly handle a diverse range of events, from cultural festivals to technical workshops.

Registration and Ticketing: Allow users to register for events and purchase tickets online for a smooth experience.

Interactive Calendar: View all events and their schedules on an interactive calendar for easy planning.

Admin Dashboard: Administrators have access to a powerful dashboard for managing events, users, and content.

# Steps to start this application

## Prerequisites

Before running the project, make sure you have the following installed on your system:

-   Node.js (version 18 or later)
-   npm (Node.js package manager)
-   Docker

## Steps to Run the Project

1. Clone the Repository:

```bash
git clone https://github.com/MishraTanishq619/technorollix2024.git
```

2. Navigate to the Project Directory:

```bash
cd techorollix2024
```

"Run FrontEnd , Backend and Database separately"

3. PostgreSQL Database (using docker):

```bash
docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

4. Split to two terminal separated.

5.  1. Navigate to the Backend Directory , install packages , Build and Start the server:

```bash
cd techno_backend
npm install
npm run build
npm start
```

5.  2. Navigate to the Frontend Directory , install packages and Run the server:

```bash
cd techno_frontend
npm install
npm run dev
```

6. Access the Application at `https://localhost:3000/`.

## Ports

Database - localhost:5432 (docker port)
Backend - localhost:4000
Frontend - localhost:3000

# Contributing

We welcome contributions from the community to make Technorollix 2024 even better! If you'd like to contribute, please follow these guidelines:

Fork the repository.
Create a new branch for your feature: `git checkout -b feature-name`.
Commit your changes: `git commit -m 'Add some feature'`.
Push to the branch: `git push origin feature-name`.
Submit a pull request with a detailed explanation of your changes.

# License

This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for using Technorollix 2024 Event Portfolio and Management Website!.
