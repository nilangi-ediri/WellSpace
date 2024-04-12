#Step 1: Initial Setup
Make sure you have Node.js and npm (Node Package Manager) installed. You can download and install them from nodejs.org.

#Step 2: Setting up the Project
Create a new directory for your project:

bash
Copy code
mkdir my-website-backend
cd my-website-backend
Initialize a new Node.js project:

bash
Copy code
npm init -y
Install the necessary packages:

bash
Copy code
npm install express cookie-parser cors mongoose dotenv
Create your project structure:

Create a new file for your server configuration: index.js
Create directories for routes and models:
bash
Copy code
mkdir Routes Models

#Step 3: Configure Environment Variables
Create a .env file in the root of your project to store environment variables:
makefile
Copy code
PORT=8000
MONGO_URL=your_mongodb_connection_string

#Step 4: Set Up MongoDB
Make sure you have a MongoDB database setup, either locally or hosted (e.g., MongoDB Atlas).
Update the MONGO_URL in the .env file with your database connection string.

#Step 5: Create API Routes
Information API

Create a new file in the Routes directory:

bash
Copy code
touch Routes/information.js

Quizzes API

Create another file in the Routes directory:

bash
Copy code
touch Routes/quizzes.js
