
const requestOptions = {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ keyword: 'general' })
};


export default (req, res) => {
	fetch('https://22fd2033cc37.ngrok.io/api/', requestOptions)
		.then(response => res.status(200).json(data))
}
