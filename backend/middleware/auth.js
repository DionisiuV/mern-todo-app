// function
// does token exist
// verify token
// next
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
	const token = req.header('x-auth-token');

	console.log(token);

	if (!token) return res.status(401).send('Not authorized');

	const secretKey = process.env.SECRET_KEY;

	try {
		const payload = jwt.verify(token, secretKey);
		req.user = payload;

		next();
	} catch (error) {
		res.status(400).send('Invalid token');
	}
}

module.exports = auth;
