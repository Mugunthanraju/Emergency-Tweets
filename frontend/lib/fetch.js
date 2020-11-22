const fetcher = (url) => fetch(url, {
	method: 'post',
	body: JSON.stringify({ 'keyword': 'general' }),
	headers: { 'Content-Type': 'application/json' },
}).then((res) => res.json())

export default fetcher
