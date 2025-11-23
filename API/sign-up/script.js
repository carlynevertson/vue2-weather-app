const form = document.getElementById('signUpForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	try {
		const res = await fetch('http://localhost:3000/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password }),
		});
		const data = await res.json();

		if (!res.ok) {
			throw new Error(data.error || 'Something went wrong');
		}

		message.textContent = data.message;
		message.style.color = 'green';

		// clear form
		form.reset();
	} catch (err) {
		message.textContent = err.message;
		message.style.color = 'red';
	}
});
