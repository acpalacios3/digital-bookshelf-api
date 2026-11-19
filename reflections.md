## Reflection:
1. Why is it beneficial to separate your routes, models, and database connection into different directories?

Separating routes, models, and database connections makes the project more organized and easier to maintain. Each directory has a specific responsibility. Routes handle HTTP requests, models define the data structure, and the database connection manages the connection to MongoDB. 

2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?

PUT is used to replace an entire resource, while PATCH is used to update only specific fields. 
My PUT endpoint uses findByIdAndUpdate() with req.body, which allows updating only the fields sent in the request. Therefore, its behavior is more similar to PATCH.

3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

A good practice is to return a success status code and a confirmation message. Sending the deleted object can also be useful because it allows the client to know exactly which resource was deleted. 