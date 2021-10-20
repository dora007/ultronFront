import styles from './index.css';

function BasicLayout(props) {
	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>
				<div>
					<img src="./spaceman.png" width="40" style={{ float: 'left', paddingLeft: 30 }}></img>
					<span style={{ fontSize: 28, fontWeight: 500, paddingLeft: 7, fontFamily: 'fantasy' }}>Ultron</span>
					<br />
				</div>
			</h1>
			{props.children}
		</div>
	);
}

export default BasicLayout;
