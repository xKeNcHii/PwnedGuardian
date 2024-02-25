// pwnedChecker.js
const https = require('https');
const crypto = require('crypto');

function pwnedCheckerMiddleware(req, res, next) {
    const password = req.body.password;

    if (!password) {
        return res.status(400).send('Please provide a password.');
    }

    const hashedPassword = crypto.createHash('sha1').update(password).digest('hex').toUpperCase();
    const prefix = hashedPassword.slice(0, 5);
    const apiCall = `https://api.pwnedpasswords.com/range/${prefix}`;

    https.get(apiCall, function (response) {
        let hashes = '';

        response.setEncoding('utf8');
        response.on('data', (chunk) => hashes += chunk);
        response.on('end', () => {
            const foundHash = hashes.split('\r\n')
                .map(line => line.split(':'))
                .find(([suffix, count]) => (prefix + suffix) === hashedPassword);

            if (foundHash) {
                // If password is found in breaches, return an error response
                return res.status(400).send(`Registration is Unsuccessful. Password is vulnerable. Found ${foundHash[1]} matches.`);
            } else {
                // If password is not found in breaches, proceed to the next middleware
                next();
            }
        });
    }).on('error', function (err) {
        console.error(`Error: ${err}`);
        return res.status(500).send('Internal Server Error');
    });
}

module.exports = pwnedCheckerMiddleware;
