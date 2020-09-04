import React from 'react';
import { Link } from 'umi';
import { Helmet } from 'react-helmet';

import styles from './index.less';

export default () => {
  return (
		<div>
			<Helmet>
				<title>index</title>
			</Helmet>
			<div className={styles.container}>
				<h1 className={styles.title}>Page index</h1>
				<p className={styles.water}>
					coded with ❤ by rj
				</p>
				<Link to='/example'>去示例頁</Link>
			</div>
		</div>
  );
}
