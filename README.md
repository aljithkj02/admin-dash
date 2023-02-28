# Dashboard Manager
<p>This project is a simple web application built using the MERN stack (MongoDB, Express, React, Node.js) with user authentication and authorization. The application allows users to sign up, log in, and view their own information. Admins have additional access to an admin dashboard where they can view all users and their roles.</p>

<br/>

## Installation
<p>1, Clone the repository</p>
<p>2, Navigate to the server directory in the terminal/command prompt</p>
<p>3, Run npm install to install dependencies for the backend server</p>
<p>4, Navigate to the client directory by running cd client</p>
<p>5, Run npm install to install dependencies for the client-side application</p>
<p>6, Navigate back to the project directory by running cd ..</p>

<br/>

## Usage
<p>• To start the server, navigate to the server directory in the terminal/command prompt and run the command npm run server. Before running the server, you'll need to create a .env file in the root folder of the project and add the following environment variables:</p>
<p>- PORT: The port number that the server should listen on.</p>
<p>- MONGO_URL: The URL of the MongoDB database that the server should connect to.</p>
<p>- JWT_CLIENT_SECRET: A secret key that the server will use to sign and verify JSON Web Tokens (JWTs).</p>

<br/>
<p>• To start the client application, go to the "client" directory and run the command "npm run dev". Also, make sure to update the "API_URL" in the "config.js" file located in the "src" folder with the URL where our backend server is running. This will ensure that the client can communicate with the server correctly.</p>
<p>• Navigate to http://127.0.0.1:5173/ in your browser to use the application</p>

<br/>

## Features
<p>• User authentication using JWT</p>
<p>• User sign-up page with server-side validation</p>
<p>• User login page with server-side validation</p>
<p>• User dashboard where users can view and update their own information</p>
<p>• Admin dashboard where admins can view all users and their roles, search for users by name or email address, and update user roles</p>
<p>• Role-based authorization using JWT</p>

<br/>

## Technologies
<p>• MongoDB</p>
<p>• Express</p>
<p>• React</p>
<p>• Node.js</p>
<p>• Redux</p>
<br/>
<br/>

### the login page allows both normal users and admin users to log in to the system.
<img src="./images/loginuser.png" />

<br/>
<br/>

### On the right-hand side of the navigation bar, there is a admin-signup button that allows users to create an admin ID. Clicking on this button will redirect the user to a page where they can sign up as an admin.
<img src="./images/adminsignup.png" />

<br/>
<br/>

### Once a normal user has successfully logged in or signed up, they will be redirected to this page. On this page, the user has the ability to update their name, email, and password.
<img src="./images/userdashboard.png" />

<br/>
<br/>

### If the logged-in user is an admin, they can access a page that displays a list of all users in the system along with their roles. The admin can also change the roles of users and search for users based on their name or email.
<img src="./images/admindashboard.png" />