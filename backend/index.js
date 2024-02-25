const express = require('express');
const bodyParser = require('body-parser');
const pwnCheck = require('./models/pwnedChecker.js');
const path = require('path');

const app = express();

app.use("/",(req, res) => {
    res.send("Server is now running.")
})
// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML page with the registration form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/register', pwnCheck, (req, res) => {
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

// Start the server
app.listen(5000, console.log("Server is now started on PORT 5000"));