# 🛍️ Forever - Full Stack eCommerce Website (MERN Stack)

**Forever** is a modern full-stack eCommerce web application built using the **MERN Stack**. It offers a complete online shopping experience with real-time cart updates, multiple payment gateways (💳 **Stripe & Razorpay**), secure authentication, and a fully functional **Admin Dashboard** to manage your store.

---

## 🚀 Tech Stack (Used with Purpose)

| Technology | Description |
|------------|-------------|
| **React.js** | Frontend UI with dynamic routing and state management |
| **Node.js + Express.js** | Backend REST APIs and business logic |
| **MongoDB** | NoSQL database for products, users, orders |
| **JWT (JSON Web Token)** | Secure user & admin authentication system |
| **Razorpay & Stripe** | Online payment integration (COD also available) |
| **Mongoose** | MongoDB object modeling and schema validation |
| **CORS** | Enables cross-origin communication between frontend and backend |
| **dotenv** | Securely manages sensitive environment variables |
| **bcryptjs** | Password hashing and authentication security |
| **Vercel + Render** | Full-stack deployment (Frontend + Backend) |

---

## 🎯 Key Features

### 👨‍💼 For Users
- 🔍 Explore, search, filter, and sort products
- 🛒 Add to cart with size selection (product variants)
- 📦 Place orders using:
  - ✅ Cash on Delivery
  - 💳 Stripe / Razorpay Payment Gateway
- 👤 Login & Signup with JWT Authentication
- 📄 View your orders and delivery details

---

### 🛠️ For Admin
- 🔐 Secure Admin Login (JWT protected)
- 🛍️ Add, update, and delete products
- 📦 View all orders placed by users
- 🧾 Monitor and manage the entire store

---
## 📦 Project Structure Overview

Forever/
├── client/ # React Frontend
│ ├── pages/
│ ├── components/
│ └── utils/
├── server/ # Express Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── middleware/
├── .env
├── README.md
└── package.json

---

## 🛠️ How to Run Forever Locally

### Step 1: Clone the Repo
```bash
git clone https://github.com/your-username/forever.git
cd forever

Step 2: Install Dependencies

Backend
cd backend
npm install

Frontend
cd frontend
npm install

Step 3: Add Environment Variables

Create a .env file inside /server:

PORT=5000
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_secret

Step 4: Start the Project

Backend

cd server
npm run start

Frontend

cd client
npm run dev

Deployment

🚀 Frontend and Backend deployed on Vercel
🌐 Easily accessible via single domain

Made With ❤️ by Ayush Sharma
