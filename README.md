# React Blog App

A full-stack blog application built with **React** (Vite + Tailwind CSS) on the frontend, and **Node.js**, **Express**, **MongoDB** on the backend. Users can create, save drafts, publish, and edit blogs.

---

## Features

- Create and edit blog posts
- Save blogs as drafts
- Publish blogs
- RESTful API with Express
- Modern UI using Tailwind CSS

---

## Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- Axios
- React Router

**Backend:**
- Node.js
- Express
- MongoDB (Mongoose)

---
live demo: [https://react-blog-app-lovat.vercel.app/](https://react-blog-app-lovat.vercel.app/)

## ⚙️ Setup Instructions

### 🔧 Prerequisites
- Node.js and npm
- MongoDB (local or cloud - e.g., MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/blog-site.git
cd blog-site
````

### 2. Start the Backend
```bash
cd server
npm install
```

###Create a .env file in the server directory and add the following:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blogdb

###Then start the backend:
```bash
node server.js
```


### 3. Start the Frontend
```bash
cd client
npm install
npm run dev
```
