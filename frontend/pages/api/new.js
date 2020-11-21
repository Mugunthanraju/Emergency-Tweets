import Twit from '../../lib/twit'

export default (req, res) => {
	//res.status(200).json({ message: 'Tweet gönderildi :p' })

	//demo sayfasında benim adıma tweet atamayın diye bu alanı yorumladım.

	const { tweet } = req.body

	if (!tweet) return res.status(400).json({ message: 'Tweet cannot be empty!' })

	Twit.post('statuses/update', { status: tweet }, function (
		err,
		data,
		response
	) {
		if (err) {
			return res.status(400).json({ message: 'Ups! An error occured.', err: err })
		}
		//
		res.status(200).json(data)
	})
}
