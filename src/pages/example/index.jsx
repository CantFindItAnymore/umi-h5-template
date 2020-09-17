import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import { Helmet } from 'react-helmet'
import styles from './index.less'
import { history } from 'umi'
import { Button } from 'antd-mobile'

const Example = props => {
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		props.dispatch({
			type: 'example/getRandomImg',
		})
	}, [refresh])

	const handleChangeImg = () => {
		setRefresh(!refresh)
	}

	const handleToHome = () => {
		history.push('/')
	}

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

				<Button
					size="small"
					type="primary"
					className={styles.link}
					onClick={handleToHome}
				>
					back Home
				</Button>
			</div>
		</div>
	)
}

export default connect(({ example }) => ({
	example,
}))(Example)
