const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000; // Adjust port for Vercel

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML page with the registration form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Simulate successful registration if both username and password are provided
    if (username && password) {
        // In a real application, you would hash the password before storing it
        console.log(`Registration successful! Username: ${username}, Password: ${password}`);
        res.send('Registration successful!');
    } else {
        res.send('Please enter both username and password.');
    }
});

// Basic GET request handler to confirm server is running
app.get('/ping', (req, res) => {
    res.send('Server is up and running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
