import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'
import Photo from '../photo'
import IconButton from '../button/icon'
import * as Icon from '../icons'
import { Badge } from 'styled-badge-component';
function Tweet({
	created_at,
	retweet_count,
	favorite_count,
	retweeted,
	favorited,
	text,
	profile_image_url_https,
	screen_name
}) {
	// created_at
	// retweet_count
	// favorite_count
	// retweeted
	// favorited
	// text
	// user.name
	// user.profile_image_url_https
	// user.screen_name

	return (
		<article className={styles.tweet}>
			{/* avatar */}
			<div className={styles.avatar}>
				<Photo src={profile_image_url_https} />
			</div>

			{/* body */}
			<div className={styles.body}>
				<header className={styles.header}>
					<span className={styles.name}>{name}</span>{' '}
					<span>@{screen_name}</span> ·{' '}
					<span>{formatDistanceToNowStrict(new Date(created_at))}</span>
				</header>

				<div className={styles.content}>{text}</div>

				<footer className={styles.footer}>
					{/* reply */}
					<div className={styles.footerButton}>
						<span>Status: </span>
						<Badge danger pill>Police Call</Badge>
					</div>

					{/* retweet */}

					{/* like */}


					{/* share */}

				</footer>
			</div>
		</article>
	)
}

export default Tweet

/*
		  <div className={styles.footerButton}>
			<IconButton className={styles.actionButton}>
			  <Icon.Share />
			</IconButton>
		  </div>
*/