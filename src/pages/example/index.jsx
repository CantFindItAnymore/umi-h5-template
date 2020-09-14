import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Helmet } from 'react-helmet';
import styles from './index.less';
import { Link } from 'umi';
import { Button } from 'antd-mobile';

const Example = props => {
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		props.dispatch({
			type: 'example/getRandomImg',
		});
	}, [refresh]);

	const handleChangeImg = () => {
		setRefresh(!refresh);
	};

	return (
		<div>
			<Helmet>
				<title>example</title>
			</Helmet>
			<div className={styles.container}>
				<img
					src={props.example.randomImg}
					className={styles.ignoreImg}
					onClick={handleChangeImg}
				/>

				<Link to="/" className={styles.link}>
					<Button size='small' type="primary">
						back Home
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default connect(({ example }) => ({
	example,
}))(Example);
