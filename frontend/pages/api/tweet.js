import Twit from '../../lib/twit'

export default (req, res) => {
	fetch('https://22fd2033cc37.ngrok.io/api/', {
		method: 'post',
		body: JSON.stringify({ keyword: 'general' })
	}).then(function (response) {
		return res.json(response);
	}).then(function (data) {
		console.log("interesting")
	});
}
