import React from 'react'
import TabBar from '@/components/TabBar'

import tabList from '@/assets/tabList'

export default props => {
	const tabPathList = []
	tabList.map(item => {
		tabPathList.push(item.page)
	})

	return (
		<div className="container">
			{props.children}
			{tabPathList.includes(props.location.pathname) ? <TabBar /> : null}
		</div>
	)
}
