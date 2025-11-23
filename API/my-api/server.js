const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

// Creating API endpoint
app.get('/api/users', (req, res) => {
	res.json([
		{
			id: 1,
			name: 'Carlyn',
		},
		{
			id: 2,
			name: 'Glenda',
		},
		{
			id: 3,
			name: 'Wakeel',
		},
		{
			id: 4,
			name: 'Micealinn',
		},
	]);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
