# Bluetail Mobile Bar Company Website
The premier destination for on-the-go event beverage services!

## About Us
Bluetail Mobile Bar Company brings the craft cocktail experience directly to your events. Whether it's a wedding, corporate function, or private gathering, we transform your venue with our mobile bar, expert mixologists, and delicious drinks.

## Features
- **Event Booking:** Seamlessly submit event requests and track details directly on our website.
- **Recipe Library:** Explore our range of classic and signature cocktails for inspiration.
- **My Cocktails:** Registered users can create their personal cocktail section, saving favorite recipes and even designing custom creations.

## Technologies Used
- **Frontend:** React (Create React App), Redux (for state management), Axios (for API communication with the backend)
- **Backend:** Node.js, Express.js, MongoDB, JWT (for user authentication)

## Setup and Configuration
- **Create a .env file:** In the root of your project, create a file named .env. This file will hold your sensitive configuration variables. Important: Add this .env file to your .gitignore to prevent exposing secrets publicly.


### Define Environment Variables:
Inside your .env file, add the following lines, replacing placeholders with your actual values:

NODE_ENV=development 
PORT=5000 
MONGO_URI=your_mongodb_connection_string 
JWT_SECRET=your_strong_jwt_secret 
REACT_APP_BACKENDAPI=http://localhost:5000 (or API URL if different)

### Access Variables:
- **Backend:** In your Node.js/Express.js code, access these variables using process.env.VARIABLE_NAME
- **Frontend:** Access them in your React components using process.env.REACT_APP_VARIABLE_NAME.

## Getting Started
- **Prerequisites:** Ensure you have Node.js and npm (or yarn) installed.
- **Clone the repository:** 
```
git clone https://github.com/your-username/bluetail-website.git
```

- **Install dependencies:**
```
cd bluetail-website
npm install
```

- **Start the development server:**
```
npm start
```
## Contributing
[Outline contribution guidelines if it’s an open-source project]

## License
MIT License (See LICENSE file for details)
