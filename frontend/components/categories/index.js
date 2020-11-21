import React from "react";
import styles from "./categories.module.css"
import cn from "classnames"
import KeyButton from "./button";
function Categories({ children }) {
	const [state, setState] = React.useState([
		{
			keyword: "#urgent",
		},
		{
			keyword: "#earthquake",
		},
		{
			keyword: "#emergency",
		},
	]);

	return <div>
		<div className={styles.key}>
			<div className={styles.keywordheading}>
				<h4>Categories</h4>
			</div>
			{state.map((keyword) => (
				< KeyButton keyword={keyword} ></KeyButton>
			))}
		</div>
	</div >;
}

export default Categories

/*

	*/