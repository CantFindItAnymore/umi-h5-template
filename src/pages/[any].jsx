/*
 * @Author: ranjun
 * @Date: 2020-09-17 09:47:56
 * @Last Modified by: ranjun
 * @Last Modified time: 2020-09-17 09:52:33
 */

// 404方案

import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './404.less';
import { history } from 'umi';
import { Button } from 'antd-mobile';

const NotFound = props => {

	const handleToHome = () => {
		history.push('/');
	}

	return (
		<div>
			<Helmet>
				<title>(╥╯^╰╥)页面不存在</title>
			</Helmet>
			<div className={styles.container}>
				<img src='/404.png' className={styles.ignoreImg} />
				<Button size='small' type="primary" className={styles.link} onClick={handleToHome}>
					back Home
				</Button>
			</div>
		</div>
	);
};

NotFound.path = undefined;

export default NotFound;
