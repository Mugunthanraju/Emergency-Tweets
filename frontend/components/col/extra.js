import React from 'react'
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import styles from "./extra.module.css"
import cn from "classnames"
import * as Icon from '../icons'
import Tweet from "../tweet"
import Stack from "../stack/index"
import Categories from '../categories';

function Sidebar({ children }) {
	return (

		<div className={cn(styles.widgets)}>
			<div className={cn(styles.widgets_input)}>
				<Icon.Search style={{ fontSize: 20, marginRight: 10, color: "#354050" }} /> <input placeholder="Search Twitter" type="text" />
			</div>
			<Categories></Categories>
			<div className={cn(styles.widgets_widgetContainer)}>
				<h2>What's Happening at #Codechella by @TwitterU</h2>
				<br />
				<br />
				<Stack />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="TwitterU"
					options={{ height: 500, width: 350 }}
				/>
			</div>
		</div>)
}

export default Sidebar
