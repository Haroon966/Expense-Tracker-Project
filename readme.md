# Expense Tracker Project

## Introduction

The Expense Tracker Project is a comprehensive financial management system designed to help individuals and businesses track their expenses, incomes, debts, and credits. Built with Django (backend) and React (frontend), it provides a user-friendly interface for efficient financial tracking.

## System Requirements

To run the project, ensure your system meets the following requirements:

- **Operating System**: Windows, macOS, or Linux
- **Web Browser**: Google Chrome, Mozilla Firefox, or Microsoft Edge
- **Python**: Version 3.8 or higher
- **Django**: Version 3.2 or higher
- **React**: Version 17.0 or higher
- **Node.js**: Version 14.17 or higher
- **npm**: Version 6.14 or higher

## Project Structure

The project is divided into two main components:

- **Backend** (Django): Handles data storage, authentication, and RESTful API endpoints.
- **Frontend** (React): Provides an interactive and user-friendly interface.

## Backend Features

- **RESTful APIs**: Supports CRUD operations for financial transactions.
- **Database**: Uses SQLite for data storage.
- **Authentication & Authorization**: Utilizes Django's built-in authentication system.

## Frontend Features

- **User Interface**: Built with React for a seamless user experience.
- **Component-Based Architecture**: Uses reusable React components.
- **State Management**: Manages application state efficiently.

## API Endpoints

The backend provides the following API endpoints:

### Expenses

- `GET /api/expenses/` - Retrieve all expenses.
- `POST /api/expenses/` - Create a new expense.
- `GET /api/expenses/:pk/` - Retrieve a specific expense.
- `PUT /api/expenses/:pk/` - Update a specific expense.
- `DELETE /api/expenses/:pk/` - Delete a specific expense.

### Incomes

- `GET /api/incomes/` - Retrieve all incomes.
- `POST /api/incomes/` - Create a new income.
- `GET /api/incomes/:pk/` - Retrieve a specific income.
- `PUT /api/incomes/:pk/` - Update a specific income.
- `DELETE /api/incomes/:pk/` - Delete a specific income.

### Debts

- `GET /api/debts/` - Retrieve all debts.
- `POST /api/debts/` - Create a new debt.
- `GET /api/debts/:pk/` - Retrieve a specific debt.
- `PUT /api/debts/:pk/` - Update a specific debt.
- `DELETE /api/debts/:pk/` - Delete a specific debt.

### Credits

- `GET /api/credits/` - Retrieve all credits.
- `POST /api/credits/` - Create a new credit.
- `GET /api/credits/:pk/` - Retrieve a specific credit.
- `PUT /api/credits/:pk/` - Update a specific credit.
- `DELETE /api/credits/:pk/` - Delete a specific credit.

## Installation

Follow these steps to set up the project:

### Backend Setup

```sh
# Clone the repository
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker/backend

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

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

## Usage

1. Open your web browser and navigate to `http://localhost:8000`.
2. Register a new account.
3. Log in using your credentials.
4. Navigate through the following tabs:
   - **Expenses**: View and manage expenses.
   - **Incomes**: Track your income sources.
   - **Debts**: Monitor outstanding debts.
   - **Credits**: Manage credit transactions.
   - **Dashboard**: Visualize financial data.

## Technologies Used

- **Backend**: Django, Django REST Framework
- **Frontend**: React, React Router
- **Database**: SQLite
- **API**: RESTful API architecture

## Contributors

- **[Your Name]** - Project maintainer & developer
- **[Contributor 1]** - Frontend development
- **[Contributor 2]** - Backend development

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

This project was inspired by:

- **Expense Tracker by Django Girls**
- **React Expense Tracker by Traversy Media**

---

_Developed with ❤️ using Django & React!_
#Expense-Tracker-Project
