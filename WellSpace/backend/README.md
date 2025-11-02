from pathlib import Path

# Updated backend README content
backend_readme_content = """# 🧩 WellSpace Backend (Node.js + Express + MongoDB)

This is the **backend** service for the WellSpace web application — powering authentication, blogs, feedback, and other APIs for the platform.

The backend is built with **Node.js**, **Express.js**, and **MongoDB Atlas** and follows the MVC (Model–View–Controller) architecture pattern.

---

## 📘 Table of Contents

- [Project Setup](#project-setup)
- [Installation](#installation)
- [Create Local .env File](#create-local-env-file)
- [File Structure](#file-structure)
- [Starting the Development Server](#starting-the-development-server)
- [Deployment](#deployment)
- [Variable Naming](#variable-naming)
- [API Documentation](#api-documentation)
- [Acknowledgements](#acknowledgements)

---

## ⚙️ Project Setup

The backend connects to a **MongoDB Atlas** database.  
To access it:

1. Visit [MongoDB Atlas](https://www.mongodb.com/).
2. Log in using the shared group account credentials:  
   **Email:** `mcigroupn22@gmail.com`  
   **Password:** `WellSpace@Diana@2024`  

---

## 🧩 Installation

When setting up the backend project locally for the first time:

```bash
cd backend
npm install
npm install nodemailer
