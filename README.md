# [FriendFinder](<(https://client-three.vercel.app)>)

## 📌 Introduction

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

FriendFinder is a fully responsive web application designed to facilitates user interactions through friend management features. The application will allow users to register, log in, search for other users, send and manage friend requests, and receive friend recommendations based on mutual connections.

## 👨‍💻 Tech Stack Used

### Frontend

- ReactJS, TailwindCSS, JavaScript, Axios, React-icons

### Backend

- Node.js, Express.js, JWT, MongoDB

## Folder Structure

```bash
mern-stack-project/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── friendController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Friend.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── friendRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── FriendList.js
│   │   │   ├── MutualFriend.js
│   │   │   ├── Navbar.js
│   │   │   └── UserData.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── Main.js
│   │   │   └── SignIn.js
│   │   │   └── SignUp.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   │
│   └── package.json
├── README.md
└── .gitignore

```

## 🛠️ Installation Steps

Star and Fork the Repo 🌟 and this will keep us motivated.

1. Clone the repository

```bash
git clone https://github.com/subhashdippu/Tutedude.git
```

2. Change the working directory

```bash
cd Tutedude
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm run start
```

## 📸 Screenshots

<img src='./Frontend/src/Readme/SignIn.png'/>
<img src='./Frontend/src/Readme/Home.png'/>
<img src='.//Frontend/src/Readme/Friend.png'/>
<img src='./Frontend/src/Readme/Profile.png'/>
