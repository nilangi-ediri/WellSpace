# 🧠 WellSpace Frontend (React)

This is the **frontend** for the WellSpace web application — a platform that promotes mental wellbeing through community engagement, expert content, and interactive challenges.  
The frontend is built with **React (Create React App)** and styled using **Bootstrap** and custom CSS.

---

## 🚀 Features

- 🧭 **Routing** via `react-router-dom`  
- 🧑‍💻 **User authentication** via backend API  
- 📝 **Rich text editor** for creating and editing blog posts  
- ☁️ **Cloudinary integration** for image uploads  
- 💬 **Toast notifications** for success and error feedback  
- 🧩 **Dynamic API base URL** via `.env` file  

---

## 🛠️ Tech Stack

| Area | Technology |
|------|-------------|
| Frontend | React (Create React App), Bootstrap |
| State Management | React Hooks (`useState`, `useEffect`, Context) |
| HTTP Requests | Axios |
| Text Editing | Reusable Rich Text Editor (based on Quill.js / Draft.js) |
| Image Uploads | Cloudinary |
| Deployment | Vercel / Netlify |

---

## ⚙️ Environment Variables

Create a file named **`.env`** in the root of your `frontend/` directory:

```bash
# Backend API endpoint (update for production)
REACT_APP_API_URL=https://wellspace.onrender.com
```

> 🧩 This variable is used across the app (for example, in `EditBlog.jsx` and other API calls) to dynamically connect to your deployed backend.  

Remember to **restart the dev server** after editing `.env`.

---

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Visit [http://localhost:3000](http://localhost:3000) to view it in your browser.  
Hot-reload is enabled for real-time updates.

### `npm run build`
Builds the app for production in the `build` folder.  
Minifies JS/CSS and optimizes performance.

### `npm test`
Runs unit tests in interactive watch mode.

### `npm run eject`
⚠️ *Irreversible operation.*  
Copies all CRA configs for manual customization.

---

## 🌐 Deployment

### ▶️ Option 1: Deploy to Vercel
1. Push the repo to GitHub.  
2. Import the `frontend` folder as a project on [Vercel](https://vercel.com/).  
3. Add environment variable:
   ```
   REACT_APP_API_URL = https://wellspace.onrender.com
   ```
4. Build command: `npm run build`  
   Output directory: `build`

### ▶️ Option 2: Deploy to Netlify
1. Connect the repo to Netlify.  
2. Set build command and publish directory:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Add the same environment variable under  
   *Site Settings → Build & Deploy → Environment.*

---

## 🧱 Folder Structure

```
frontend/
│
├── public/                # Static assets
├── src/
│   ├── components/        # Navbar, Footer, Reusable editor, etc.
│   ├── constants/         # Categories, config data
│   ├── pages/             # React pages (Blog, EditBlog, etc.)
│   ├── utils/             # Helper functions (uploadCloudinary.js)
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
│
├── .env                   # Environment variables
└── package.json
```

---

## 🧰 Troubleshooting

| Problem | Fix |
|----------|-----|
| `Missing REACT_APP_API_URL` | Ensure `.env` exists and restart dev server |
| `CORS error` | Whitelist frontend origin in backend CORS config |
| API not reachable in production | Check Render/Railway backend URL and update `.env` |
| Image upload fails | Verify Cloudinary credentials and internet connection |

---

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Create React App Docs](https://create-react-app.dev/)
- [Bootstrap Docs](https://getbootstrap.com/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Netlify Deployment Guide](https://docs.netlify.com/)
