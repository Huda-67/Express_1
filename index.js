import express from "express"; // Import the express module
const app = express();  // Create an instance of the express application
const PORT = 4000;  // Define the port number for the server to listen on
app.get("/huda", (req, res) => {  // Define a route for the root URL ("/")
    res.send("MY NAME IS HUDA"); // Send "Hello World" as the response when the root URL is accessed
});
app.get("/index", (req, res) => {  // Define a route for the "/about" URL
    res.send("This is the Index page."); // Send a response for the "/about" URL
});
app.get("/copy", (req, res) => {  // Define a route for the "/contact" URL
    res.send("This is the cpoy contact."); // Send a response for the "/contact" URL
});
app.listen(PORT, () => {   // Start the server and listen on the defined port   
    console.log(`Server is running on http://localhost:${PORT}`); // Log a message to the console when the server starts
});
