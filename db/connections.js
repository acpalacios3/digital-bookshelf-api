// 1. In the db/ directory, create a connection.js file.
// 2. In this file, use mongoose.connect() to establish a connection to your database using the URI from your .env file.
//  Export your connection logic.

import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

export async function connectDB() {

    try {
        await mongoose.connect(URI)
        console.log('connected to MONGOdb');
    } catch (err) {

        console.error('could not connect to mongo', err);

    }

} 
