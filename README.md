Urvann - Plant E-commerce App
Urvann is a modern e-commerce platform designed for selling plants. It features a user-friendly interface for browsing a wide catalog of plants, managing a shopping cart, and a secure user authentication system. The application is built with a separate frontend and backend, allowing for flexible deployment and scalability.

Key Features
User Authentication: Users can create an account and log in securely.

Plant Catalog: Browse a diverse collection of indoor and outdoor plants.

Category Filtering: Filter plants by category (e.g., Indoor, Outdoor, Succulent) for easy navigation.

Search Functionality: Find specific plants quickly with a search bar.

Shopping Cart: Add and remove items from the cart, and view a subtotal, delivery fee, and total amount.

Admin Panel: A dedicated feature for an administrator to add new plants to the catalog.

Responsive Design: The application provides an optimal viewing experience on both desktop and mobile devices.

Technologies Used
The project is split into two main parts: a frontend built with React and a backend built with Node.js.

Frontend
React: For building the user interface.

React Router: For client-side routing.

Axios: For making API requests to the backend.

React Toastify: For displaying notifications.

CSS: Custom CSS modules for styling.

Backend
Node.js & Express: To run the server and handle API requests.

MongoDB & Mongoose: For the database and object data modeling.

JSON Web Token (JWT): For user authentication and authorization.

Bcrypt: For hashing and salting user passwords.

CORS: To enable cross-origin resource sharing between the frontend and backend.

Getting Started (Local Setup)
To set up and run this project on your local machine, follow these steps.

Prerequisites
Node.js (LTS version recommended)

npm (Node Package Manager)

A running MongoDB instance (e.g., local installation or a cloud service like MongoDB Atlas)

1. Backend Setup
Navigate to the backend directory in your terminal:

cd backend

Install the necessary dependencies:

npm install

Create an environment file. Copy the .sampleEnv file to a new file named .env:

cp .sampleEnv .env

Open the newly created .env file and add your configuration variables:

PORT=4000
MONGO_URI=<Your_MongoDB_Connection_String>
JWT_SECRET=<A_Long_Random_String_for_JWT_Signing>

Start the backend server:

npm start

Your server should now be running at http://localhost:4000.

2. Frontend Setup
Open a new terminal window and navigate to the frontend directory:

cd frontend

Install the necessary dependencies:

npm install

Create a frontend environment file. Create a new file named .env in the frontend folder:

REACT_APP_BACKEND_URL=http://localhost:4000

This links your frontend to the local backend server.

Start the React development server:

npm start

The application should now be accessible in your browser at http://localhost:3000.

Deployment
The frontend and backend are deployed as separate services.

Backend Deployment
Platform: Recommended platforms include Render or Heroku.

Setup: Configure the deployment to use npm install as the build command and npm start as the start command.

Environment Variables: Be sure to set the MONGO_URI and JWT_SECRET variables in your hosting provider's dashboard.

Frontend Deployment
Platform: Recommended platforms for static sites include Vercel or Netlify.

Build Process: The deployment pipeline will automatically run npm run build to create a production-ready build folder.

Environment Variables: Set the REACT_APP_BACKEND_URL environment variable to the public URL of your deployed backend. This is a critical step to ensure your frontend can communicate with the live backend API.