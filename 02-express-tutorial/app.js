const express = require('express');
const app = express();
const port = 5000;

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

// Define a route for the about page
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

// Catch-all route for handling 404 errors
app.use((req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
  