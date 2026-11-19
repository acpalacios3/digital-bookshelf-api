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


// Create: POST / - Creates a new book using the data in req.body.
// Test: http://localhost:3000/api/books
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


// Read All: GET / - Retrieves all books from the database
// Test:http://localhost:3000/api/books
route.get('/', async (req, res) => {
    try {
        const response = await Book.find({});
        console.log('successfully retrieved books');

        // res.json(response) =====> return JSON
        // res.status(200).json(response) ====> Sets HTTP 200 and returns JSON.

        res.status(200).json(response)
    } catch (err) {
        console.error('failed to retrieve books:', err);
        res.status(400).json({ error: 'failed to fetch books', details: err.message });
    }
});


// Read One: GET /:id - Retrieves a single book by its _id.
// Test: http://localhost:3000/api/books/6afd18def0d56104711f8d9f
route.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params);

        const singleBook = await Book.findById(id);
        if (!singleBook) {
            return res.status(404).json({
                error: 'book not found'
            });

        }
        console.log('successfully retrieved a book');
        res.status(200).json(singleBook);

    } catch (err) {
        console.error('failed to retrieve singular book', err);
        res.status(400).json({ error: 'cannot retrieve book', details: err.message });
    }
})

//  Update: PUT /:id - Updates a book by its _id using the data in req.body.
// Test: http://localhost:3000/api/books/6afd18def0d56104711f8d9f

route.put('/:id', async (req, res) => {

     try{
        // req.params.id : gets the ID from the URL.
        const id = req.params.id;
        const body = req.body;

        // findByIdAndUpdate(): finds the book and updates it.
        // returnDocument: 'after' : returns the document after updating it.
        const updateBook = await Book.findByIdAndUpdate(id, body, { returnDocument: 'after' });
        console.log('successfully updated a book');

        // 200 (successful operation)
        res.status(200).json(updateBook);

    } catch (err) {
        console.error('Could not update book:', err);
        // 400 (Bad Request)
        res.status(400).json({ error: 'failed to update book', details: err.message });
    }

    });


export default route;
