# 📽️ YouTube Clone

*A full-stack web application replicating the core functionality of YouTube, built using the MERN stack (MongoDB, Express, React, Node.js). This project allows users to view, upload, and interact with videos while offering seamless authentication and responsive design.*

---

## ✨ Features

### 🖥️ Frontend
- **Home Page**:
  - YouTube-inspired header with a **search bar** and **filters**.
  - Sidebar toggle functionality with a hamburger menu.
  - A grid display of videos with thumbnails, titles, channel names, and views.
- **Authentication**:
  - Secure user **sign-up** and **login** using **JWT-based authentication**.
  - Google-style form for signing in.
  - Dynamic header updates when logged-in.
- **Video Player Page**:
  - Video playback functionality.
  - Features like **like/dislike** buttons and **interactive comments**.
  - Options to **add**, **edit**, and **delete comments**.
- **Channel Page**:
  - Logged-in users can **create and manage channels**.
  - List all videos uploaded to a channel.
  - Edit or delete options available for the channel's owner.
- **Responsive Design**:
  - Optimized for devices of all sizes, including **mobile**, **tablet**, and **desktop**.

### 🛠️ Backend
- **User Authentication**:
  - Secure password hashing using **bcrypt**.
  - Token-based authentication powered by **JWT**.
- **Channel Management**:
  - APIs to create and fetch channel information.
- **Video Management**:
  - CRUD (Create, Read, Update, Delete) APIs for managing video data.
- **Comment Management**:
  - APIs for handling video comments.

---

## 🛠️ Technologies Used

| **Frontend**        | **Backend**       | **Database** | **Authentication**   |
|----------------------|-------------------|--------------|-----------------------|
| React               | Node.js           | MongoDB      | JSON Web Tokens (JWT)|
| React Router DOM    | Express.js        |              |                       |
| Axios               |                   |              |                       |

---

## ⚙️ Installation

### Frontend Setup
1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone <repo-url>
   cd youtube-clone


## ⚙️ Installation

### Frontend Setup
1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone <repo-url>
   cd youtube-clone
Install dependencies:

bash
npm install
Start the React development server:

bash
npm start
Backend Setup
Navigate to the backend directory and install dependencies:

bash
cd youtube-backend
npm install
Create a .env file in the backend directory with the following content:

env
PORT=5000
MONGO_URI=<your_mongo_db_connection_string>
JWT_SECRET=<your_jwt_secret_key>
Start the backend server:

bash
npm start


# 🔍 API Endpoints

## User Authentication
POST /api/signup – Sign up a new user.
POST /api/signin – Sign in and receive a token.

## Channel Management
POST /api/channel – Fetch channel details.

##  Video Management
GET /api/videos –  Fetch all videos.
GET /api/video/:id –  Fetch a video.

## Comment Management
DELETE /api/video/comment – Add a comment to a video.
