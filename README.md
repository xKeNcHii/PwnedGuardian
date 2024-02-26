# PwnGuardian

PwnGuardian is a registration validation service that checks if a password has been compromised in data breaches using the [Have I Been Pwned](https://haveibeenpwned.com/) API.

## Testing Website

I have set-up a testing website using React for the frontend, Tailwind CSS for the styling, and Node.js with Express for the backend. You can test PwnGuardian on my testing website at [https://pwned-guardian-client.vercel.app/](https://pwned-guardian-client.vercel.app/). This website is set up for testing purposes and allows you to simulate registration requests and observe the responses.

## Features

- Validates passwords against known data breaches.
- Prevents registration with compromised passwords.
- Provides real-time feedback to users during registration.
- Easy to integrate into your existing applications.

## Getting Started

To use the PwnGuardian script middleware in your Express.js application, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/pwnguardian.git
    ```

2. Navigate to the `backend/models` directory in the cloned repository.

3. Copy the `pwnedChecker.js` file to your Express.js project's `models` directory.

4. Include the middleware in your Express.js application by requiring it in your main server file (e.g., `app.js` or `server.js`) and using it as middleware for the `/register` endpoint.

    ```javascript
    const express = require('express');
    const bodyParser = require('body-parser');
    const pwnedCheckerMiddleware = require('./models/pwnedChecker.js');

    const app = express();
    const port = process.env.PORT || 5000;

    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/register', pwnedCheckerMiddleware, (req, res) => {
        // Your registration logic here
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
    ```

5. Start your Express.js server.

Now, the PwnGuardian middleware is integrated into your Express.js application, and it will validate passwords against known data breaches when users register.

## Usage

To use PwnGuardian, send a POST request to the `/register` endpoint with the user's desired username and password. PwnGuardian will validate the password against known data breaches and respond with a success or error message.

Example request:

```
http
POST /register HTTP/1.1
Content-Type: application/json

{
  "username": "exampleUser",
  "password": "examplePassword"
}
```
## Example response for a successful registration:
```
json

{
  "success": true,
  "message": "Registration successful!"
}
```
## Example response for an unsuccessful registration (password compromised):
```
{
  "success": false,
  "message": "Registration is Unsuccessful. Password is vulnerable. Found 3 matches."
}
```
## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.
License

## This project is licensed under the MIT License.

Feel free to adjust it according to your project's specific details and requirements.

