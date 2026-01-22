# Admin Dashboard (React – Express – MongoDB)

## Introduction to Technologies

This project is built using a **modern MERN stack** to create a full admin dashboard application with a clear separation between frontend and backend.

**React** is used on the frontend to build interactive and dynamic user interfaces. It allows us to create reusable components, manage application state, and handle navigation between pages using `react-router-dom`. React helps keep the UI responsive without reloading the page.

**Express.js** is used on the backend as a lightweight framework on top of Node.js. It helps define API routes, handle HTTP requests (GET, POST, PUT, DELETE), apply middleware, and organize backend logic in controllers.

**MongoDB** is the database used to store application data such as admin users and tasks. With **Mongoose**, schemas and models are defined to structure and validate the data before saving it to the database.

Other important tools include:
- **JWT** for authentication and secure API access
- **bcrypt** for password encryption
- **Axios** for frontend-backend communication
- **Git & GitHub** for version control

---

## About the Project

The **Admin Dashboard** project is a full-stack web application for managing users and tasks.  
It allows admin users to register, log in, create tasks, assign them to users, and monitor progress, while providing a secure backend API.

The project is designed following real-world best practices:
- Clear separation between frontend and backend
- RESTful API design
- Secure authentication and role-based access
- Scalable and maintainable code structure

---

## What We Did Step by Step

**1. Project Initialization**  
We created a single repository with two main parts: a React frontend and an Express backend.  
Each part has its own `package.json` and dependencies installed using npm.

**2. Frontend Development**  
The user interface was built using React functional components.  
Pages such as Dashboard, Users, and Tasks were created and connected using React Router.  
Forms and inputs are connected to React state using `useState` and validated using basic HTML5 attributes.

**3. Backend Setup**  
An Express server was created and configured with middleware such as `express.json()` and `cors()`.  
The backend was organized into models, controllers, and routes for Users and Tasks to follow clean architecture principles.

**4. Database Integration**  
MongoDB was connected using Mongoose.  
Schemas and models were created for:
- AdminUser
- Task  

This ensures consistent data storage and validation.

**5. API Development (CRUD)**  
REST APIs were implemented for:
- Admin Users (create, read, update, delete)
- Tasks (create, read, update, delete)

Controllers handle the logic, while routes only define endpoints.

**6. Frontend ↔ Backend Integration**  
Axios was used in React to send HTTP requests to the backend APIs.  
Responses from the server are handled to display success messages, errors, and dynamic data on the UI.

**7. Authentication & Security**  
Admin authentication was implemented using:
- Password hashing with bcrypt
- JWT tokens on login
- Protected routes using middleware
- Role-based access (Admin only for certain actions)

**8. Testing & Debugging**  
APIs were tested using Postman.  
Frontend behavior was tested directly in the browser with valid and invalid data to ensure stability.

---

## How to Install and Run the Project

**1. Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git


```bash
# 2. Install Backend Dependencies
cd backend
npm install

# Create a .env file in the backend folder and add:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key

# Run the backend
node server.js

# 3. Install Frontend Dependencies
cd frontend
npm install
npm start

# The frontend will run on http://localhost:3000
# The backend will run on http://localhost:5000

# Summary
# This project demonstrates how to build a real-world admin dashboard using React, Express, and MongoDB.
# It covers frontend development, backend API creation, database integration, authentication, and security practices.
# The project is suitable as a portfolio project and a strong foundation for adding advanced features such as task analytics, role management, and deployment.
# Contributions and improvements are always welcome.
```
