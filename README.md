# LEAD APPLICATION

## Overview

The **Lead App** is a comprehensive full-stack application designed for managing and handling lead information efficiently. The application features user-friendly interfaces for adding, updating, and deleting leads. Built using a modern tech stack, this app integrates several powerful technologies:

- **Vite** for a fast and optimized development experience with React.
- **React** for building a responsive and interactive user interface.
- **TailwindCSS** for a sleek and customizable design system.
- **Node.js** and **Express.js** for a robust backend.
- **MongoDB Atlas** for scalable and flexible database management.
  
The Lead App provides a seamless experience for managing lead data with functionalities for creating, editing, and deleting leads. It is styled with TailwindCSS to ensure a modern and clean look, and the backend is powered by Node.js and Express.js to handle API requests and manage database operations.

## Key features include:
- **Lead Management** : Add, update, and delete leads with ease.
- **Responsive Design**: Modern, responsive UI built with TailwindCSS.
- **Database Integration**: MongoDB Atlas for reliable and scalable data storage.
- Optimized Development: Fast and modern development setup with Vite.

## Technologies
- **Frontend**: React, TailwindCSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: Firebase
- **Stack**: MERN (MongoDB, Express.js, React, Node.js)

## Important Notice: MongoDB URI Configuration

⚠️ **WARNING:** The MongoDB URI must be added and updated by the user before running the application.

To ensure the application connects to the correct MongoDB instance, please follow these steps:

1. **Locate the Environment Variables File:**
   - The MongoDB URI should be specified in a `.env` file or directly in the application's configuration file (e.g., `config.js`).

2. **Add Your MongoDB URI:**
   - In the `.env` file, add the following line with your MongoDB URI:
     ```plaintext
     MONGODB_URI=your_mongodb_uri_here
     ```
   - **Note:** The URI in the backend/.env is a placeholder. **DO NOT COPY** it directly. Replace it with your actual MongoDB URI.

3. **Ensure the URI is Correct:**
   - Double-check the URI for accuracy. An incorrect URI will prevent the application from connecting to the MongoDB database.

4. **Keep the URI Secure:**
   - Never commit the `.env` file or any configuration file containing the MongoDB URI to a public repository. Make sure the `.env` file is added to your `.gitignore` to prevent accidental exposure.

Failure to configure the MongoDB URI correctly will result in connection errors, and the application may not function as intended.


## Setup and Installation
**Prerequisites**
- Node.js (v16 or later)
- MongoDB Atlas account

## Frontend Setup
- Navigate to the client directory and install dependencies:
cd client
npm install

- Create a .env file in the client directory with the following content:
VITE_API_URL=http://localhost:5000/api

- Start the development server:
npm run dev

## Backend Setup
- Clone the repository:
git clone <repository-url>
cd lead-app

- Navigate to the server directory and install dependencies:
cd server
npm install

- Create a .env file in the server directory with the following content:
MONGO_URI=your_mongodb_connection_string
PORT=5000

- Start the server:
npm start

## Running the Application
- **Backend** : The backend server will run on http://localhost:5000.
- **Frontend** : The frontend development server will run on http://localhost:3000.
Open http://localhost:3000 in your browser to interact with the application.

## Usage
- Add Lead: Use the form to add new leads, including details such as email, name, number, and product.
- Update Lead: Edit existing leads by selecting the edit button, updating the details, and saving changes.
- Delete Lead: Remove leads using the delete button associated with each lead entry.
- Responsive Design: The app is designed to be fully responsive and adaptable to various screen sizes.

## Contact
For any questions or feedback, please contact samikshawankar808@gmail.com
   
