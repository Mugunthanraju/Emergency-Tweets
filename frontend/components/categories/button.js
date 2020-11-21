import React from "react";
import styles from "./button.module.css"


function KeyButton({
	keyword: keyword
}) {
	return (<button className={styles.button}>
		<div key={keyword.id}>
			<div className={styles.keywordname}>
				<strong>{keyword.keyword}</strong>
			</div>
		</div>
	</button>);
}

export default KeyButton