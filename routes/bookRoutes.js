// API Routes
// 1. In the routes/ directory, create a bookRoutes.js file.
// 2. Use express.Router() to create a new router instance.
// 3. Implement the five core CRUD endpoints on this router:
//  Create: POST / - Creates a new book using the data in req.body.
//   Read All: GET / - Retrieves all books from the database.
//   Read One: GET /:id - Retrieves a single book by its _id.
//  Update: PUT /:id - Updates a book by its _id using the data in req.body.
//  Delete: DELETE /:id - Deletes a book by its _id.
// 4. Use async/await and try...catch blocks in all routes to handle errors.
// 5. Export the router.

import express from "express";
import Book from "../models/Book.js";

const route = express.Router();

console.log('Book routes loaded');

// 1. POST: Create a new book
route.post('/', async (req, res) => {
    try {
        const newBook = await Book.create(req.body);

        console.log('successfully created a book');

        res.status(201).json(newBook);

    } catch (err) {
        console.error('failed to create book:', err);
        res.status(400).json({
            error: 'could not create book',
            details: err.message
        });
    }
});

export default route;
