# Backend

Include step-by-step instructions on how to install and set up the backend project. This may include dependencies, environment setup, etc.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Features](#features)
- [Test User Login Information](#test-user-login-information)
- [Acknowledgements](#acknowledgements)

## Project setup

- MongoDB atlas database setup: `Li-Ting (a1847791)`
- To access MongoDB atlas database, please go to https://www.mongodb.com/ and log in using our group account: `mcigroupn22@gmail.com`

## Installation

When you first time pull and run the backend project locally, do the following command:

```bash
cd backend
npm install
```

## Create your own local .env file

For each parameters, there will be actually secret keys that you need to fill in. 

`Li-Ting (a1847791)` will put the secret keys in the `resources` channel in our private Discord server as the secret keys shouldn't be exposed in the public repository. 

```bash
PORT=5000
MONGO_URL=
JWT_SECRET_KEY=
```

## File Structure
The main entry point of the backend functionality is located in the index.js file within the api directory.

```bash
WellSpace
└── backend
    └── api
        └── index.js
```

## Starting the Development Server

To start the development server, follow these steps:

- Open your terminal.
- Navigate to the WellSpace/backend directory using the cd command.
- Run the following command:

```bash
npm run start-dev
```

Once the server starts successfully, you should see the following message in the terminal:

```bash
MongoDB database is connected successfully
Server is running on port: 5000
```

## Acknowledgements

- Initial README author: `Li-Ting (a1847791)`