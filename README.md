# 🎬 BrainFlix 101

A full-stack YouTube-style video app built with **React**, **Express** and **SASS**. Inspired by the BrainStation project brief, this version was upgraded with modern tools, dynamic routing, comment functionality and full deployment.

Live Demo: https://anikacustod.io/brainflix-101/

---

## ⚙️ Tech Stack

- ⚛️ **Frontend**: React 19 (Vite), React Router, Axios, SASS
- 🧠 **Backend**: Express.js, dotenv
- 🧪 **Testing**: Postman for API testing
- 🚀 **Deployment**: DigitalOcean droplet (Nginx + PM2), Cloudflare for DNS/SSL

---

## 💡 Features

- 🎥 **Video Player** – Plays the selected main video with dynamic routing (`/videos/:id`)
- 📝 **Comment System** – Add and display comments for each video
- 📺 **Next Videos Sidebar** – Displays other available videos excluding the one currently playing
- 📤 **Upload Page** – Upload form for adding new videos
- ⏳ **Loading Animations** – Visual feedback during data load and form submission
- 🎨 **SASS Styling** – Organized with SCSS for reusable and scalable styles
- 📱 **Responsive Design** – Mobile and desktop-friendly layout

---

## 🧪 How to Run Locally

### 1. Clone the Repository

- git clone https://github.com/zxcvanikabnm/brainflix-101.git
- cd brainflix-101

### 2. Install Dependencies
# Backend
- cd server
- npm install

# Frontend
- cd ../client
- npm install

### 3. Create a .env File in server/
- PORT=8080

### 4. Start the App
# In one terminal: start backend
- cd server
- npm run dev

# In a second terminal: start frontend
- cd ../client
- npm run dev

App will be running at:
http://localhost:5173

---

🌐 Deployment
- Deployed on a DigitalOcean droplet
- Nginx used to reverse-proxy both backend and frontend
- Managed via PM2
- Domain + SSL handled through Cloudflare
- Backend API: Deployed privately to the same DigitalOcean droplet

- Live at: https://anikacustod.io/brainflix-101/

<img width="750" height="1334" alt="anikacustod io_brainflix-101_videos(iPhone SE)" src="https://github.com/user-attachments/assets/dc9497ea-18a7-401e-9c50-169f446c7d42" />

<img width="1536" height="2048" alt="anikacustod io_brainflix-101_videos(iPad Mini)" src="https://github.com/user-attachments/assets/f12ecbdf-5c6e-4fdb-b7ac-eaf6476ccee3" />

<img width="2048" height="2732" alt="anikacustod io_brainflix-101_videos(iPad Pro)" src="https://github.com/user-attachments/assets/bfb2fad5-e2ce-4c90-9eb1-8279263005ce" />


