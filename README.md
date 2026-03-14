# 📈 StockStack

A simple yet functional Product Listing application built with the MERN stack. Track your List Of Items, manage your watchlist, and keep up with your daily requirements with CRUD operations.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)

## ✨ Features

- **Portfolio Management** - Add, view, update, and delete stock holdings
- **Watchlist** - Create and manage your stock watchlist
- **User Authentication** - Secure signup/login with JWT
- **Stock Data** - View basic stock information and prices
- **Responsive Design** - Clean, mobile-friendly interface
- **Personal Dashboard** - Track all your stocks in one place

## 🛠️ Tech Stack

**Frontend:**
- React.js with Vite
- React Router for navigation
- Axios for API calls
- CSS3 / Tailwind CSS for styling

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Bcrypt for password hashing

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stockstack.git
   cd stockstack
Install dependencies

Backend:

bash
cd server
npm install
Frontend:

bash
cd client
npm install
Environment Variables

Create a .env file in the server directory:

text
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
Create a .env file in the client directory:

text
VITE_API_URL=http://localhost:5000/api
Run the application

Backend (from server directory):

bash
npm run dev
Frontend (from client directory):

bash
npm run dev
Access the application

Frontend: http://localhost:5173

Backend: http://localhost:5000

📁 Project Structure
text
stockstack/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context API providers
│   │   ├── utils/         # Helper functions
│   │   └── App.jsx        # Main App component
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── config/            # Configuration files
    ├── controllers/       # Route controllers
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    ├── middleware/        # Custom middleware
    └── server.js          # Entry point
🔌 API Endpoints
Authentication
POST /api/auth/register - Register new user

POST /api/auth/login - User login

GET /api/auth/me - Get current user

Stocks (Portfolio)
GET /api/stocks - Get all user stocks

POST /api/stocks - Add stock to portfolio

PUT /api/stocks/:id - Update stock details

DELETE /api/stocks/:id - Remove stock from portfolio

Watchlist
GET /api/watchlist - Get user watchlist

POST /api/watchlist - Add stock to watchlist

DELETE /api/watchlist/:id - Remove from watchlist

💡 Key Features
CRUD Operations
Complete Create, Read, Update, Delete functionality for managing your stock portfolio and watchlist.

Authentication
JWT-based authentication ensures secure user sessions and protected routes.

MongoDB Integration
Mongoose schemas define Stock and Watchlist models with proper validation and relationships.

🧪 Testing
bash
# Run tests
npm test

# Run with coverage
npm run test:coverage
📝 Future Enhancements
Real-time stock price updates via external API

Portfolio analytics and performance tracking

Stock charts and historical data visualization

News feed for watchlisted stocks

Price alerts and notifications

📝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
Saket Kumar

🙏 Acknowledgments
Built as a portfolio project to demonstrate MERN stack proficiency

Focus on clean CRUD operations and RESTful API design

Thanks to the MongoDB and Express communities for excellent documentation

🔗 Links
Live Demo

API Documentation

⭐ If you found this project helpful, please give it a star!
