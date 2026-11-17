// Book Schema and Model
// 1. In the models/ directory, create a Book.js file.
// 2. Define a schema for a Book with the following fields and validation rules:
    // title: A String, which is required.
    // author: A String, which is required.
    // isbn: A String, which must be unique.
    // publishedDate: A Date.
    // inStock: A Boolean, with a default value of true.
//3.  Compile this schema into a model named Book and export it.

import mongoose from "mongoose";
import {Schema} from "mongoose";


const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn:{
        type: String,
        unique: true      
    },
    publicationDate: Date,
    inStock: {
        type: Boolean,
        default: true
    }
})


const Book = mongoose.model("Book", bookSchema);

// make this model available throughout our application
export default Book;

