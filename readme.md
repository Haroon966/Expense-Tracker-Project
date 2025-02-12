# Expense Tracker Project

## Introduction

The **Expense Tracker Project** is a powerful financial management system designed to help individuals and businesses efficiently track their **expenses**. Built with **Django** (backend) and **React** (frontend), it provides a seamless and user-friendly experience for managing finances. The system allows users to monitor their financial activities, generate insightful reports, and make informed financial decisions.

## System Requirements

To run the project smoothly, ensure your system meets the following requirements:

- **Operating System**: Windows, macOS, or Linux
- **Web Browser**: Google Chrome, Mozilla Firefox, or Microsoft Edge
- **Python**: Version 3.8 or higher
- **Django**: Version 3.2 or higher
- **React**: Version 17.0 or higher
- **Node.js**: Version 14.17 or higher
- **npm**: Version 6.14 or higher

## Project Structure

The project is structured into two main components:

### Backend (Django)

- **Handles data storage, authentication, and API endpoints**
- **Django REST Framework** for API development
- **SQLite/PostgreSQL/MySQL support**

### Frontend (React)

- **User-friendly interface built with React**
- **Component-based architecture for reusability**
- **State management using Redux or Context API**

## Features

### Backend Features

- **RESTful APIs**: Supports CRUD operations for financial transactions.
- **Authentication & Authorization**: Django’s built-in authentication system for secure user access.
- **Database Support**: SQLite by default with PostgreSQL/MySQL options.
- **Data Validation & Error Handling**: Ensures clean and structured data.
- **JWT Token-based Authentication**: For secure API access.

### Frontend Features

- **Interactive Dashboard**: Provides an overview of financial data.
- **Real-time Expense Tracking**: Easily add, update, and delete transactions.
- **Filter & Sort Functionality**: Helps users manage transactions efficiently. (Coming soon)
- **Data Visualization**: Graphs and charts for better financial insights. (Coming soon)
- **Mobile-Friendly Design**: Fully responsive for all devices.

## API Endpoints

### Expenses

- `GET /api/expenses/` - Retrieve all expenses.
- `POST /api/expenses/` - Create a new expense.
- `GET /api/expenses/:pk/` - Retrieve a specific expense.
- `PUT /api/expenses/:pk/` - Update a specific expense.
- `DELETE /api/expenses/:pk/` - Delete a specific expense.

## Installation Guide

Follow these steps to set up and run the project:

### Backend Setup

```sh
# Clone the repository
git clone https://github.com/Haroon966/Expense-Tracker-Project.git
cd expense-tracker/backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

# Create a superuser (optional)
python manage.py createsuperuser

# Start the development server
python manage.py runserver
```

### Frontend Setup

```sh
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm start
```

## How to Use

### Admin Panel Access

- Navigate to `http://localhost:8000/admin/`
- Use the following credentials:
  - **Username**: admin
  - **Password**: 1111

1. **Open the Application**:

   - Backend: `http://localhost:8000`
   - Frontend: `http://localhost:3000`

2. **User Registration & Authentication**:
   - Register a new user account.
   - Log in using your credentials.
3. **Managing Financial Transactions**:

   - Navigate through the tabs:
     - **Dashboard**: Overview of financial data.
     - **Expenses**: Add, edit, or delete expenses.

4. **Filter & Sort Transactions**:(Coming Soon)

   - Use search, filters, and sorting options to find specific transactions.

5. **Visualizing Financial Data**: (Coming Soon)
   - Check graphs and charts for financial insights.

## Tools & Technologies Used

- **Backend**:

  - Django
  - Django REST Framework
  - SQLite/PostgreSQL/MySQL
  - JWT Authentication

- **Frontend**:

  - React
  - Redux (or Context API)
  - React Router
  - Material-UI / Tailwind CSS for UI components

- **Development & Deployment**:
  - Git & GitHub
  - Docker (optional)
  - CI/CD Pipeline (GitHub Actions, optional)

## Screen Shot
  - Frontend main Page
![Alt text](https://raw.githubusercontent.com/Haroon966/Expense-Tracker-Project/refs/heads/main/main%20page%20(Front%20Page).png "Frontend main Page")
  - Backend admin Page
![Alt text](https://raw.githubusercontent.com/Haroon966/Expense-Tracker-Project/refs/heads/main/admin%20panel%20(backend).png "Frontend main Page")

## Contributors

- **Haroon Ali** - Project Maintainer & Developer
- **Haroon Ali** - Frontend Development
- **Haroon Ali** - Backend Development

## License

This project is licensed under the **MIT License**. See the LICENSE file for details.

---

_Developed with ❤️ using Django & React!_

#Expense-Tracker-Project
