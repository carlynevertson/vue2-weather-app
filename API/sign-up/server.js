const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// storing sign ups temporarily
const users = [];

// creating endpoint for signup page
app.post('/signup', (req, res) => {
	const { name, email, password } = req.body;

	// validation
	if (!name || !email || !password) {
		return res.status(400).json({ error: 'All fields are required' });
	}

	// store the user for now
	users.push({ name, email, password });

	console.log('Current users:', users);

	res.status(201).json({ message: 'User signed up successfully!' });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
