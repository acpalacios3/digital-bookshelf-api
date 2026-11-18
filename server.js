// configure our environment variables 
import 'dotenv/config';
import e from 'express';
import { connectDB } from './db/connections.js';
import route from './routes/bookRoutes.js';


const app = e();
const port = 3000;

// Middleware to parse JSON
app.use(e.json());

// register book routes
app.use('/api/books',route);

// In server.js, require and execute your database connection.
connectDB();

//start server
app.listen(port, () => {
    
    console.log('Server running on port: ' + port);
})

