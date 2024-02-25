const express = require('express');
const bodyParser = require('body-parser');
const pwnedCheckerMiddleware = require('./models/pwnedChecker.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Server is running.")
});

app.post('/register', pwnedCheckerMiddleware, (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        console.log(`Registration successful! Username: ${username}, Password: ${password}`);
        res.send('Registration successful!');
    } else {
        res.send('Please enter both username and password.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
