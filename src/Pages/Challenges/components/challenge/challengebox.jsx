import React from "react";
import styles from "./challengebox.module.css";

const Challengebox = (props) => {
	
	return ( 
		<div className={styles.challengebox}>
			<h2>{props.number}</h2>
		</div>
	 );
}

export default Challengebox;