import React from 'react'
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import styles from "./extra.module.css"
import cn from "classnames"

function Sidebar({ children }) {
	return (
		<div className={cn(styles.widgets)}>
			<div className={cn(styles.widgets_input)}>
				<input placeholder="Search Twitter" type="text" />
			</div>
			<div className={cn(styles.widgets_widgetContainer)}>
				<h2>What's Happening at #Codechella by @TwitterU</h2>
				<br/>
				<br/>
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="TwitterU"
					options={{ height: 500, width: 350}}
				/>


			</div>

		</div>)
}

export default Sidebar
