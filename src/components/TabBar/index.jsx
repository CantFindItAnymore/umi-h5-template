import React, { useState, useEffect } from 'react'
import styles from './index.less'
import { connect } from 'dva'
import { history } from 'umi'
import tabList from '@/assets/tabList'

const TabBar = props => {
	console.log(props)
	const tabInit = () => {
		return tabList.map(item => {
			console.log(item.page, props.selectedTab, item.page === props.selectedTab)
			return (
				<div
					onClick={handleClickTab.bind(this, item.page)}
					key={item.page}
					className={
						item.page === props.tabBar.selectedTab ? styles.selected : ''
					}
				>
					<img
						src={
							item.page === props.tabBar.selectedTab
								? item.selectedIcon
								: item.icon
						}
						className={styles.ignoreImg}
					/>
					{item.title}
				</div>
			)
		})
	}

	const handleClickTab = path => {
		props.dispatch({
			type: 'tabBar/switchTab',
			payload: path,
		})
		history.replace(path)
	}

	return (
		<div className={`${styles.container} ${styles.ignoreTabBar}`}>
			{tabInit()}
		</div>
	)
}

export default connect(({ tabBar }) => ({
	tabBar,
}))(TabBar)
