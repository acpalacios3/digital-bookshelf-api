// configure our environment variables 
import 'dotenv/config';
import e from 'express';
import { connectDB } from './db/connections.js';
import route from './routes/ShelfRoutes.js';


const app = e();
const port = 3000;

// In server.js, require and execute your database connection.
connectDB();

app.use(e.json());
app.use('/api',route);


app.listen(port, () => {
    
    console.log('Server running on port: ' + port);
})

