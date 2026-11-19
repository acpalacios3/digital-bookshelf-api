## Mongoose Models and Schemas

## Description
This project is a RESTful API built with Node.js, Express, and MongoDB using Mongoose. It allows users to manage a collection of books through CRUD (Create, Read, Update, Delete) operations.

The API uses Mongoose schemas and models to define, validate, and manage book documents in MongoDB. It also handles HTTP requests and returns JSON responses to the client.

## Technologies:

1. Node.js: JavaScript runtime environment used to run the server.
2. Express.js: Web framework used to create API routes and handle HTTP requests.
3. MongoDB: NoSQL database used to store book information.
4. Mongoose: Object Data Modeling (ODM) library used to define schemas, create models, and interact with MongoDB.
5. Postman: API testing tool used to send HTTP requests and verify responses.
6. dotenv: Used to manage environment variables and database configuration.

Features
* Create new books and save them to MongoDB.
* Retrieve all books from the database.
* Retrieve a single book by its ID.
* Update existing book information.
* Delete books by their ID.
* Validate required fields using Mongoose schemas.
* Use JSON responses to communicate with the client.
* Handle errors and return appropriate HTTP status codes.

## Project Architecture and File Structure:

* server.js	Configures the Express server, middleware, database connection, and API routes.
* db/connections.js	Establishes the connection between the application and MongoDB.
* models/Book.js Defines the Book schema and Mongoose model, including field types and validation rules.
* routes/bookRoutes.js Defines the CRUD endpoints (GET, POST, PUT, DELETE) for managing books.
* .env	Stores environment variables, such as the server port and MongoDB connection string.
* .gitignore	Specifies files and folders that Git should ignore.
* package.json	Contains project information, dependencies, and npm scripts.

## Run the Application:

* Install the dependencies:
   npm install
* Create a .env file in the project root and configure your environment variables:
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
* Start the server:
   npm run dev
*  Open Postman and test the API endpoints using:
   http://localhost:3000/api/books

## Testing (images)
Postman was used to test all CRUD operations:
* POST: Create a new book. http://localhost:3000/api/books
* GET: Retrieve all books. http://localhost:3000/api/books
* GET - Id: specific book. http://localhost:3000/api/books/6afd18def0d56104711f8d9f
* PUT: Update an existing book. http://localhost:3000/api/books/6afd18def0d56104711f8d9f
* DELETE: Remove a book from the database. http://localhost:3000/api/books/delete/6afd18def0d56104711f8d9f