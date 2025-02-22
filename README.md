# MERN Stack Online Book Store with Inventory Management

## Project Overview
This project is a **MERN Stack Online Book Store** with an **Inventory Management System** and **Authentication** features. The application provides an admin panel for managing books and a user-friendly interface for browsing and purchasing books.

## Features
- **Authentication System**: User registration, login, and authentication.
- **Admin Panel**: Upload, edit, and delete books.
- **Inventory Management**: Track and manage available book stock.
- **User-Friendly Interface**: Browse books, search functionality.
- **No Payment Integration**: This project does not include payment processing (planned for a separate project).

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase / JWT
- **State Management**: Redux (if applicable)

## Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/mern-bookstore.git
   cd mern-bookstore
   ```
2. **Install Dependencies**
   ```sh
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```
3. **Configure Environment Variables**
   - Create a `.env` file in the `server` directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Update `client/.env` if needed for API connection.

4. **Run the Application**
   ```sh
   # Start backend server
   cd server
   npm start
   
   # Start frontend development server
   cd ../client
   npm start
   ```

## Folder Structure
```
mern-bookstore/
│── client/         # React frontend
│── server/         # Express backend
│── models/         # Mongoose models
│── routes/         # API routes
│── controllers/    # Request handling logic
│── middleware/     # Authentication & other middleware
│── public/         # Static files
│── .env            # Environment variables
│── README.md       # Project documentation
```

## Future Enhancements
- Add **payment integration** in a separate project.
- Implement **role-based access control** (RBAC).
- Improve **book recommendation system** using AI.

## Contribution
Feel free to contribute by submitting issues or pull requests!

## License
This project is licensed under the **MIT License**.

## Author
Developed by **[K.ANUSHA]**.

---
🚀 **Happy Coding!**
