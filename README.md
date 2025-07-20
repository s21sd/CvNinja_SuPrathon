# 📄 Resume Builder Web App

An innovative and powerful **MERN Stack** based web application developed during the **National Level Virtual Hackathon** by **Team Omega**. This Resume Builder empowers users to easily create, customize, and share professional resumes using a seamless and secure interface.

---

## 🚀 Project Overview

Our app solves the common struggle job seekers face while creating resumes — confusing tools, scattered templates, and formatting issues. With our centralized platform, users can:

* Create multiple resumes with structured inputs
* Customize them with modern templates
* Share them via public links
* Instantly export them as polished PDFs

Everything is built with user simplicity, design flexibility, and scalability in mind.

---

## 🧩 Problem We’re Solving

* 🧠 **Simplifies Complexity**: Replaces outdated, rigid tools with a guided, visual resume builder
* ⚡ **Saves Time & Effort**: Build resumes in minutes with real-time previews
* 🔐 **Secure Platform**: User login with JWT and encrypted passwords (Bcrypt)

---

## 🎨 Key Features

* 🔐 **User Authentication**
  Secure login and signup using **JWT + Bcrypt**

* 🧾 **Resume Creation & Editing**
  Add personal info, education, experience, skills, certifications, and more in a structured format

* 🎨 **Customizable Templates**
  Choose from multiple themes with **real-time live previews**

* 🌐 **Live Resume Sharing** 🆕
  Instantly generate public links for resumes—viewable without login

* 📄 **One-Click PDF Export**
  Create print-ready resumes using **jsPDF** in just one click

* 🧠 **Smart Dashboard**
  Manage, edit, delete, or duplicate multiple resumes easily

* 📱 **Responsive UI**
  Fully optimized for **mobile, tablet, and desktop**

* 🔁 **Real-Time Sync**
  Autosave and instant updates via **React Context API**

* 💡 **User Context Management**
  Seamlessly manage sessions and user state across components

* ☁️ **Scalable Architecture**
  Designed to support cloud storage, AI integration, and multilingual expansion

---

## 🧰 Tech Stack

* **Frontend:** React.js + Vite, Tailwind CSS, React Router DOM
* **Backend:** Node.js, Express.js
* **Database:** MongoDB + Mongoose
* **Authentication:** JWT, Bcrypt.js
* **PDF Generator:** jsPDF
* **Others:** Axios, Toastify, Moment.js, React Context API

---

## 🔁 System Architecture

```plaintext
User → React Frontend → Express API → MongoDB
              ↑                  ↓
      JWT Auth         Resume CRUD
                                   ↓
                        PDF Generation (jsPDF)
         ↘ Live Resume Sharing via Unique Links
```

---

## 📂 Folder Structure

```
/resume-builder-app
├── /client
│   ├── /src
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
├── /server
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
```

---

## ⚙️ Setup Instructions

### Prerequisites:

* Node.js
* MongoDB
* npm or yarn

### Installation:

```bash
# Clone repository
$ git clone https://github.com/s21sd/CvNinja_SuPrathon.git

# Install frontend dependencies
$ cd client
$ npm install

# Install backend dependencies
$ cd ../server
$ npm install
```

### Environment Variables:

Create a `.env` file in `/server` with the following:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
```

### Run the Application:

```bash
# Start backend server
$ npm run server

# Start frontend server
$ cd client
$ npm run dev
```

---

## 🌐 Live Deployment

* 🔗 **Hosted App:** [www.cvninja.online](http://www.cvninja.online)
* 🧪 **Test Credentials:**

  * Email: `teamomega@cvninja.online`
  * Password: `87654321`

---

## 📈 Future Scope

* 🌐 Cloud storage (Firebase / AWS)
* 🤖 AI-based resume suggestions
* 🗃️ Expanded template library
* 🌍 Multilingual support
* 📊 Resume analytics (views, downloads, shares)

---

## 🧠 Team Omega — National Level Hackathon

* 👨‍💻 **Soumyendu Das** – Team Leader
* 👨‍💻 **Sunny Srivastava** – Lead Developer
* 👨‍💻 **Shreyansh Srivastava** – Developer
* 👨‍💻 **Gagan Bansal** – Developer

**Domain:** Web Development | **Problem ID:** SP25-WD02

---

## 🤝 Contributing

Feel free to fork this repo, create a feature branch, and submit pull requests. Let's build together!

---

## 📜 License

This project is licensed under the **MIT License**.

---

*Built with 💙 by Team Omega*
