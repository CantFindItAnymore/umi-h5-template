import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import { Helmet } from 'react-helmet'
import styles from './index.less'
import Uploader from '../../components/Uploader'

const Place = props => {
	return (
		<div>
			<Helmet>
				<title>place</title>
			</Helmet>
			<div className={styles.container}>
				<div className={styles.uploadContainer}>
					<Uploader fileName="营业执照" />
					<Uploader fileName="招标文件" />
				</div>
			</div>
		</div>
	)
}

export default Place
