# PwnGuardian

PwnGuardian is a registration validation service that checks if a password has been compromised in data breaches using the [Have I Been Pwned](https://haveibeenpwned.com/) API.

## Table of Contents

- [Testing Website](#testing-website)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [How PwnGuardian Works](#how-pwnguardian-works)
- [Contributing](#contributing)
- [License](#license)

## Testing Website
![image](https://github.com/xKeNcHii/PwnedGuardian/assets/109564316/3d73c1f7-788c-4770-b83e-1c8e5ffc75c3)

I have set-up a testing website using React for the frontend, Tailwind CSS for the styling, and Node.js with Express for the backend. You can test PwnGuardian on my testing website at [https://pwned-guardian-client.vercel.app/](https://pwned-guardian-client.vercel.app/). This website is set up for testing purposes and allows you to simulate registration requests and observe the responses.

Sample:
{
  "username": "123",
  "password": "123"
}

![image](https://github.com/xKeNcHii/PwnedGuardian/assets/109564316/e49ab6ca-e1a6-400b-897b-3022e387e82f)

Response:

![image](https://github.com/xKeNcHii/PwnedGuardian/assets/109564316/f3787622-3c16-468a-b3af-743b97c135b9)


## Features

- Validates passwords against known data breaches.
- Prevents registration with compromised passwords.
- Provides real-time feedback to users during registration.
- Easy to integrate into your existing applications.

## Getting Started

To use the PwnGuardian script middleware in your Express.js application, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/xKeNcHii/PwnedGuardian
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
![image](https://github.com/xKeNcHii/PwnedGuardian/assets/109564316/54ff532d-32e9-4d57-8358-619660bc78ce)

```
{
  "username": "exampleUser",
  "password": "weakpass"
}
```
## Example response for a successful registration:
```
{
  "success": true,
  "message": "Registration successful!"
}
```
## Example response for an unsuccessful registration (password compromised):
![image](https://github.com/xKeNcHii/PwnedGuardian/assets/109564316/95eefd77-5744-41ba-83b8-f6b571fd7692)
```
{
  "success": false,
  "message": "Registration is Unsuccessful. Password is vulnerable. Found 3 matches."
}
```

## How PwnGuardian Works

PwnGuardian leverages the Have I Been Pwned Passwords API to determine if a password has been compromised in data breaches. This API, developed by Troy Hunt, allows users to check whether their passwords have appeared in previously known breaches. The primary goal is to provide users with insights into the security of their passwords without compromising their privacy.

Using SHA-1 Hashing:

When a password is submitted to the PwnGuardian API, it undergoes a SHA-1 hashing process. This hashing ensures that the password is transformed into a unique fixed-length string of characters, known as a hash. The hash serves as a secure representation of the password without revealing the original text.

K-Anonymity Mechanism

To protect user privacy and prevent the exposure of sensitive information, PwnGuardian employs a k-anonymity mechanism. Instead of sending the entire hashed password to the API, only the first five characters of the hash are transmitted. This partial hash is then used to retrieve a subset of passwords from the API database that share the same initial characters.

Searching for Matches

Upon receiving the subset of password hashes from the API, PwnGuardian searches for matches by comparing the complete hashed password against the retrieved hashes. If a match is found, it indicates that the password has previously appeared in a data breach.
## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.
License

## This project is licensed under the MIT License.

Feel free to adjust it according to your project's specific details and requirements.

