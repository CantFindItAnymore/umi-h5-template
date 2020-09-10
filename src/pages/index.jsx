import React from 'react';
import { Link } from 'umi';
import { Helmet } from 'react-helmet';
import Anime from 'react-anime';

import styles from './index.less';

export default () => {
  return (
		<div>
			<Helmet>
				<title>index</title>
			</Helmet>
			<div className={styles.container}>
				<h1 className={styles.title}>Page index</h1>

				<div className={styles.water}>
					coded with <Anime
						easing="easeInBack"
						duration={800}
						direction="alternate"
						loop={true}
						scale={[.75, .9]}
					>
						❤
					</Anime> by rj
				</div>
				<Link to='/example'>去示例頁</Link>
			</div>
		</div>
  );
}
