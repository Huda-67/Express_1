const express = require("express"); // Import the express module
const app = express();  // Create an instance of the express application
const PORT = 5000;  // Define the port number for the server to listen on

app.use(express.json()); // Middleware to parse JSON request bodies

app.post("/user", (req, res) => {  // Define a route for the "/user" URL
    console.log(req.body); // Log the request body to the console
    res.send("User created."); // Send a response when a POST request is received at "/user"
});
app.listen(PORT, () => {   // Start the server and listen on the defined port
    console.log(`Server is running on http://localhost:${PORT}`);  
});