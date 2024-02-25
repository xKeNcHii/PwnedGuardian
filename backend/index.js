const express = require('express')
const app = express()

app.get("/",(req, res) => {
    res.send("Server is now running.")
})

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

app.listen(5000, console.log("Server is now started on PORT 5000"));