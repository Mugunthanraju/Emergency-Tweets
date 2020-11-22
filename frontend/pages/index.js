import React from 'react'
import useSWR from 'swr'

import styles from './index.module.css'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import fetcher from '../lib/fetch'
import Loading from '../components/loading'
import Helmet from "react-helmet"
function HomePage() {
	const { data } = useSWR('https://22fd2033cc37.ngrok.io/api/', fetcher)

	return (
		<Layout>
			<Helmet>
				<title>Emergency Tweets</title>
			</Helmet>
			{!data && (
				<div className={styles.loading}>
					<Loading />
				</div>
			)}


			{/* 			<Tweet key={tweet.id} {...tweet} />
			<Tweet key={tweet.id} {...tweet} /> */}
			{console.log(data)}
			{data?.map((tweet) => {
				return <Tweet key={tweet.id} {...tweet} />

			})}
		</Layout>
	)
}

export default HomePage
